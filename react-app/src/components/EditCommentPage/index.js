import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getComments, editComment } from "../../store/comments";

const EditCommentPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const comments = useSelector(state => state.comments);
  const comment = comments?.find(comment => comment?.id === Number(id));

  const [message, setMessage] = useState(comment.comment)

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  const submit = async (e) => {
    e.preventDefault();
    await dispatch(editComment(message, comment?.id))
    return history.push(`/videos/${comment?.videoId}`)
  }

  return (
    <div>
      <form onSubmit={submit}>
        <label>Edit Comment</label>
        <input
          type="text"
          name="comment"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default EditCommentPage;
