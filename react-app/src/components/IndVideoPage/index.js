import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../store/videos";
import DeleteVideoButton from "./DeleteVideoButton"
import EditVideoButton from "./EditVideoButton";
import Comments from "./Comments/index";
import YouTube from "@u-wave/react-youtube";
import { CenteredRowDiv, ContentDiv } from "../StyledComponents/Content-style";
import { PlayerDiv } from "../StyledComponents/Player-style";
import { IndDetails, ProfileImg, IndTitle, CommentsDiv, IndVideoTitle, IndCommentDiv } from "../StyledComponents/Video-style";
import './IndVideoPage.css'
import { ProfileImgMid } from "../StyledComponents/Profile-style";


const IndVideoPage = () => {
  const history = useHistory();
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

  const video = videos?.find(video => video.id === Number(id));
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
            <ProfileImgMid src={videoUser?.profileImg}
              onClick={(e) => history.push(`/users/${videoUser.id}`)}
            />
            <IndVideoTitle>{video?.title}</IndVideoTitle>
          </div>
        {(video && (user && (user.id === video.userId)))  && (
          <CenteredRowDiv>
            <EditVideoButton video={video} />
            <DeleteVideoButton video={video} />
          </CenteredRowDiv>
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
