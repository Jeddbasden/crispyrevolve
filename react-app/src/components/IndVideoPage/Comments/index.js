import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getComments } from "../../../store/comments";
import DeleteCommentButton from "./DeleteCommentButton";
import EditCommentButton from "./EditCommentButton";
import './Comments.css'
import { ProfileImg, IndTitle, Username, IndCommentDiv } from "../../StyledComponents/Video-style";
import { CommentForm, FormInput, FormLabel  } from "../../StyledComponents/Form-style";
import { Button, ButtonTwo } from "../../StyledComponents/Button-style";

const Comments = ({ videoId }) => {
  const dispatch = useDispatch();
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
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <ButtonTwo type="submit">Add</ButtonTwo>
        </CommentForm>
      </div>
      {comments.length > 0 &&
        comments?.map((icomment) => {
          const commentUser = users.find(user => user?.id === icomment?.userId)
          return (
            <IndCommentDiv>
              <div className="profileComment">
                <ProfileImg src={commentUser?.profileImg}/>
                <div className="profileUser">
                  <Username>{ commentUser?.username }</Username>
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
