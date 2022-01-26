import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../store/comments";


const Comments = ({ videoId }) => {
  const dispatch = useDispatch()
  const comments = useSelector(state => state.comments)
  useEffect(() => {
    const doIt = async () => {
      await dispatch(getComments(videoId));
    };
    doIt();
  }, [dispatch, videoId])
  
  return (
    <div>
      <h2>Comments</h2>
      <hr />
      {comments.length > 0 && comments?.map(comment => {
        return (
          <div>
            <p>{comment.comment}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Comments;
