import React from "react"
import { useDispatch} from "react-redux"
import { useHistory } from "react-router-dom";
import { deleteVideo } from "../../store/videos";
import { Button } from "../StyledComponents/Button-style";

const DeleteVideoButton = ({ video }) => {
  const dispatch = useDispatch();
  const history = useHistory();


  const remove = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm(`Are you sure you want to delete ${video?.title}`)
    if (confirmed) {
      await dispatch(deleteVideo(video))
      return history.push('/')
    }
  }

  return (
    <Button id={video.id} type="button" onClick={remove}>
      <i className="far fa-trash-alt"></i>
    </Button>
  );
}

export default DeleteVideoButton;
