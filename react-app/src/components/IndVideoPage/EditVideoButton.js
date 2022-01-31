import React from "react";
import { useHistory } from "react-router-dom";
import { ButtonTwo } from "../StyledComponents/Button-style";

const EditVideoButton = ({ video }) => {
  const history = useHistory();
  return (
    <ButtonTwo
      id={video?.id}
      type="button"
      onClick={(e) => {
        e.preventDefault();
        return history.push(`/videos/${video?.id}/edit`);
      }}
    >
      <i className="fas fa-edit"></i>
    </ButtonTwo>
  );
};

export default EditVideoButton;
