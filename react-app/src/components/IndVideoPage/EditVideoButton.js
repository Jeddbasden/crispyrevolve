import React from "react";
import { useHistory } from "react-router-dom";
import EditVideoPageModal from "../EditVideoPage/EditVideoPageModal";
import { ButtonTwo } from "../StyledComponents/Button-style";

const EditVideoButton = ({ video }) => {
  const history = useHistory();
  return (
    <EditVideoPageModal />
  );
};

export default EditVideoButton;
