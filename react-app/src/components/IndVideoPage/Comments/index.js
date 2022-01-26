import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getComments } from "../../../store/comments";


const Comments = ({ videoId }) => {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments);
  const user = useSelector(state => state.session.user);
  const [comment, setComment] = useState("");

  const userId = user?.id

  useEffect(() => {
    const doIt = async () => {
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
    <div>
      <h2>Comments</h2>
      <form onSubmit={submit}>
        <label>Add A Comment</label>
        <input
          type="text"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
      {comments.length > 0 &&
        comments?.map((comment) => {
          return (
            <div>
              <p>{comment.comment}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Comments;
