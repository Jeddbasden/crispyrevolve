import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addVideo } from "../../store/videos";
import { useHistory } from "react-router-dom";


const AddVideoPage = () => {
  const dispatch = useDispatch();
  const history = useHistory()

  const [title, setTitle] = useState("")
  const [videoUrl, setVideoUrl] = useState("")
  const [description, setDescription] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  
  const submit = async (e) => {
    e.preventDefault()
    const video = {
      title,
      videoUrl,
      description,
      imgUrl
    };

    await dispatch(addVideo(video));
    return history.push('/')
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label>Title</label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Video Url</label>
          <input
            type='text'
            name='videoUrl'
            value={videoUrl}
            onChange={e => setVideoUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            type='text'
            name='description'
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image Url</label>
          <input
            type='text'
            name='imgUrl'
            value={imgUrl}
            onChange={e => setImgUrl(e.target.value)}
            required
          />
        </div>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default AddVideoPage;
