import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addVideo } from "../../store/videos";
import { useHistory } from "react-router-dom";


const AddVideoPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);

  const [title, setTitle] = useState("")
  const [videoUrl, setVideoUrl] = useState("")
  const [description, setDescription] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  console.log("!!!!!!! USER !!!!!!!!!", user)
  
  const submit = async (e) => {
    e.preventDefault()
    const video = {
      title,
      videoUrl,
      description,
      imgUrl
    };

    await dispatch(addVideo(video));
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label>Title</label>
          <input
            type='text'
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Video Url</label>
          <input
            type='text'
            value={videoUrl}
            onChange={e => setVideoUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type='text'
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image Url</label>
          <input
            type='text'
            value={imgUrl}
            onChange={e => setImgUrl(e.target.value)}
            required
          />
        </div>
      </form>
    </div>
  )
}

export default AddVideoPage;
