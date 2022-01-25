import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getVideos, editVideo } from "../../store/videos";


const EditVideoPage = () => {
  const videos = useSelector(state => state.videos)
  const history = useHistory()
  const { id } = useParams()
  const dispatch = useDispatch()
  const video = videos?.find((video) => video?.id === Number(id));

  console.log("!!!!!!!! VIDEO !!!!!!!", video)
  const [title, setTitle] = useState(video?.title);
  const [description, setDescription] = useState(video?.description);
  const [imgUrl, setImgUrl] = useState(video?.imgUrl);

  useEffect(() => {
    dispatch(getVideos())
  }, [dispatch])

  const submit = async (e) => {
    e.preventDefault();
    const newVideo = {
      title,
      description,
      imgUrl,
    };
    await dispatch(editVideo(newVideo, id))
    return history.push(`/videos/${id}`);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image Url</label>
          <input
            type="text"
            name="imgUrl"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default EditVideoPage;
