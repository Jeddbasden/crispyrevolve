import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getComments } from "../../../store/comments";
import { useHistory } from "react-router-dom";
import DeleteCommentButton from "./DeleteCommentButton";
import EditCommentButton from "./EditCommentButton";
import { ProfileImg, IndTitle, Username, IndCommentDiv } from "../../StyledComponents/Video-style";
import { CommentForm, FormInput, FormLabel  } from "../../StyledComponents/Form-style";
import { Button, ButtonTwo } from "../../StyledComponents/Button-style";
import './Comments.css'

const Comments = ({ videoId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const comments = useSelector(state => state.comments);
  const user = useSelector(state => state.session.user);
  const [comment, setComment] = useState("");
  const [users, setUsers] = useState([]);

  const userId = user?.id

  useEffect(() => {
    const doIt = async () => {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
      await dispatch(getComments(videoId));
    };
    doIt();
  }, [dispatch, videoId])

  const submit = async (e) => {
    e.preventDefault()
    const newComment = {
      comment,
      userId,
      videoId
    }
    await dispatch(addComment(newComment))
    
    setComment("")
  }
  
  return (
    <div className="allComments">
      <div className="commentForm">
        <h2 className="commentsTitle">Comments</h2>
        <CommentForm onSubmit={submit}>
          <FormLabel>Add A Comment</FormLabel>
          <FormInput
            type="text"
            name="comment"
            value={comment}
            onChange={(e) => {
              if (!user) {
                const confirmed = window.confirm("You need to login to make a comment would you like to now?")
                if (confirmed) {
                  return history.push('/login')
                }
              }
              setComment(e.target.value)
            }}
            required
          />
          <ButtonTwo type="submit">Add</ButtonTwo>
        </CommentForm>
      </div>
      {comments.length > 0 &&
        comments?.map((icomment) => {
          const commentUser = users.find(user => user?.id === icomment?.userId)
          return (
            <IndCommentDiv key={icomment?.id}>
              <div className="profileComment">
                <ProfileImg
                  src={commentUser?.profileImg}
                  onClick={(e) => history.push(`/users/${commentUser?.id}`)}
                />
                <div className="profileUser">
                  <Username
                    onClick={(e) => history.push(`/users/${commentUser?.id}`)}
                  >
                    {commentUser?.username}
                  </Username>
                  <p>{icomment.comment}</p>
                </div>
              </div>
              {icomment.userId === userId && (
                <div>
                  <EditCommentButton comment={icomment} />
                  <DeleteCommentButton comment={icomment} />
                </div>
              )}
            </IndCommentDiv>
          );
        })}
    </div>
  );
}

export default Comments;
