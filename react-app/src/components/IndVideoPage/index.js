import { useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../store/videos";
import ReactPlayer from "react-player";

// import "video-react/dist/video-react.css";
import './IndVideoPage.css'


const IndVideoPage = () => {
  const videos = useSelector(state => state.videos);
  const dispatch = useDispatch();
  const { id } = useParams();
  
  useEffect(() => {
    
    const doIt = async () => {
      await dispatch(getVideos());
    };
    
    doIt();
  }, [dispatch])
  const video = videos[id - 1];

  return (
    <div>
      <div>
        <ReactPlayer
          url={`${video?.videoUrl}`}
        />
      </div>
    </div>
  );
}

export default IndVideoPage;
