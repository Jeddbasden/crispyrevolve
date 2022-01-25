import { useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../store/videos";
import ReactPlayer from "react-player";
import DeleteVideoButton from "./DeleteVideoButton"

// import "video-react/dist/video-react.css";
import './IndVideoPage.css'


const IndVideoPage = () => {
  const videos = useSelector(state => state.videos);
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector(state => state.session.user)
  
  const video = videos.find(video => video?.id === Number(id));
  
  useEffect(() => {
    const doIt = async () => {
      await dispatch(getVideos());
    };
    
    doIt();
  }, [dispatch])

  return (
    <div>
      <div>
        <ReactPlayer
          url={`${video?.videoUrl}`}
        />
      </div>
      {user?.id === video?.userId && (
        <DeleteVideoButton video={video}/>
      )}
    </div>
  );
}

export default IndVideoPage;
