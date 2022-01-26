import { useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../store/videos";
import ReactPlayer from "react-player";
import DeleteVideoButton from "./DeleteVideoButton"
import EditVideoButton from "./EditVideoButton";
import './IndVideoPage.css'
import Comments from "./Comments/index";


const IndVideoPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const doIt = async () => {
      await dispatch(getVideos());
    };
    
    doIt();
  }, [dispatch])
  const { id } = useParams();
  const user = useSelector(state => state.session.user)
  
  
  const videos = useSelector(state => state.videos);
  const video = videos?.find(video => video?.id === Number(id));

  return (
    <div>
      <div>
        <ReactPlayer
          url={`${video?.videoUrl}`}
        />
      </div>
      <div>
        <h1>{video?.title}</h1>
      </div>
      <div>
        <p>{video?.description}</p>
      </div>
      {videos?.length > 0 && (
        <div>
          <DeleteVideoButton video={video} />
          <EditVideoButton video={video} />
        </div>
      )}
      <div>
        <Comments videoId={ video.id }/>
      </div>
    </div>
  );
}

export default IndVideoPage;
