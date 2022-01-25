import React from "react"
import { useDispatch} from "react-redux"
import { useHistory } from "react-router-dom";
import { deleteVideo } from "../../store/videos";

const DeleteVideoButton = (video) => {
  const dispatch = useDispatch();
  const history = useHistory();


  const remove = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm()
    if (confirmed) {
      await dispatch(deleteVideo(video))
      return history.push('/')
    }
  }

  return (
    <button id={video.id} type="button" onClick={remove}>delete</button>
  )
}

export default DeleteVideoButton;
