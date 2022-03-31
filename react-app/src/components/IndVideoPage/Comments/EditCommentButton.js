import React from "react";
import { useHistory } from "react-router-dom";
import EditCommentPageModal from "../../EditCommentPage/EditCommentPageModal";
import { ButtonTwo } from "../../StyledComponents/Button-style";

const EditCommentButton = ({ comment }) => {
  const history = useHistory();
  return (
    <ButtonTwo
      id={comment?.id}
      type="button"
      onClick={(e) => {
        e.preventDefault();
        return history.push(`/comments/${comment?.id}/edit`);
      }}
    >
      <EditCommentPageModal />
    </ButtonTwo>
  );
};

export default EditCommentButton;
