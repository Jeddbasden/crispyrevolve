import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteComment } from "../../../store/comments";
import { Button } from "../../StyledComponents/Button-style";

const DeleteCommentButton = ({comment}) => {
  const dispatch = useDispatch();
  const remove = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm('are you sure you want to delete this comment?');
    if (confirmed) {
      await dispatch(deleteComment(comment));
      alert("Comment has been deleted!");
    }
  };

  return (
    <Button id={comment?.id} type="button" onClick={remove}>
      <i className="far fa-trash-alt"></i>
    </Button>
  );
};

export default DeleteCommentButton;
