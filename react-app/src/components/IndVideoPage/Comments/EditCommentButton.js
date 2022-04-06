import React from "react";
import { useHistory } from "react-router-dom";
import EditCommentPageModal from "../../EditCommentPage/EditCommentPageModal";
import { ButtonTwo } from "../../StyledComponents/Button-style";

const EditCommentButton = ({ comment }) => {
  const history = useHistory();
  console.log("!!!!!!! EDIT BUTTON ID !!!!", comment.id)
  return (
      <EditCommentPageModal />
  );
};

export default EditCommentButton;
