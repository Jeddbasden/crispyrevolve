import React from "react";
import { useHistory } from "react-router-dom";

const EditCommentButton = ({ comment }) => {
  const history = useHistory();
  return (
    <button
      id={comment?.id}
      type="button"
      onClick={(e) => {
        e.preventDefault();
        return history.push(`/comments/${comment?.id}/edit`);
      }}
    >
      edit
    </button>
  );
};

export default EditCommentButton;
