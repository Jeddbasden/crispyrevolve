import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../store/videos";
import DeleteVideoButton from "./DeleteVideoButton"
import EditVideoButton from "./EditVideoButton";
import Comments from "./Comments/index";
import YouTube from "@u-wave/react-youtube";
import { ContentDiv } from "../StyledComponents/Content-style";
import { PlayerDiv } from "../StyledComponents/Player-style";
import { IndDetails, ProfileImg, IndTitle, CommentsDiv, IndVideoTitle, IndCommentDiv } from "../StyledComponents/Video-style";
import './IndVideoPage.css'


const IndVideoPage = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const doIt = async () => {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
      await dispatch(getVideos());
    };
    doIt();
  }, [dispatch])
  const { id } = useParams();
  const user = useSelector(state => state.session.user)
  
  const videos = useSelector(state => state.videos);

  const video = videos?.find(video => video?.id === Number(id));
  const videoUser = users.find(user => user.id === video.userId)
  const youtubeId = video.videoUrl.split("=")[1]
  return (
    <ContentDiv>
      <PlayerDiv>
        <YouTube className="youtube"
          video={youtubeId}
        />
      </PlayerDiv>
      <IndDetails>
        <IndTitle>
          <div className="imgTitle">
            <ProfileImg src={videoUser?.profileImg}/>
            <IndVideoTitle>{video?.title}</IndVideoTitle>
          </div>
        {(videos?.length > 0 && (user && (user.id === video.userId)))  && (
          <div>
            <EditVideoButton video={video} />
            <DeleteVideoButton video={video} />
          </div>
        )}
        </IndTitle>
        <IndCommentDiv>
          <p>{video?.description}</p>
        </IndCommentDiv>
      </IndDetails>
      <CommentsDiv>
        <Comments videoId={ video.id }/>
      </CommentsDiv>
    </ContentDiv>
  );
}

export default IndVideoPage;
