import React from "react";
import { useHistory } from "react-router-dom";

const EditVideoButton = ({ video }) => {
  const history = useHistory();
  return (
    <button id={video?.id} type="button" onClick={e => {
      e.preventDefault();
      return history.push(`/videos/${video?.id}/edit`);
    }}>
      edit
    </button>
  );
};

export default EditVideoButton;
