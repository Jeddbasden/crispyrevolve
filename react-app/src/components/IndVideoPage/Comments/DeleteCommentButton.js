import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteComment } from "../../../store/comments";

const DeleteCommentButton = ({comment}) => {
  const dispatch = useDispatch();
  const remove = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm();
    if (confirmed) {
      await dispatch(deleteComment(comment));
    }
  };

  return (
    <button id={comment?.id} type="button" onClick={remove}>
      delete
    </button>
  );
};

export default DeleteCommentButton;
