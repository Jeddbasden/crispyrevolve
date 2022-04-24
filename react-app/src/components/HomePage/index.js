import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { getVideos } from '../../store/videos'
import { ContentDiv, SplashImgDiv, MainTitle, DescriptionDiv } from '../StyledComponents/Content-style'
import { Title } from '../StyledComponents/title-style'
import { DescriptionTitle, VideoUl } from "../StyledComponents/Video-style";
import Video from "./Video";

// import "~video-react/dist/video-react.css";

import './HomePage.css'

const HomePage = () => {
  const videos = useSelector(state => state.videos);
  const dispatch = useDispatch();
  const history = useHistory();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const doIt = async () => {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
      await dispatch(getVideos());
    }
    doIt();
  }, [dispatch])

  
  return (
    <ContentDiv>
      <SplashImgDiv>
        <MainTitle>welcome to crispyrevolve!</MainTitle>
      </SplashImgDiv>
      <DescriptionDiv>
        <DescriptionTitle>
          Welcome to CrispyRevolve the place to watch and upload your favorite youtube anime clips!
          <br></br>Upload your clips or just sit back and watch!
        </DescriptionTitle>
      </DescriptionDiv>
      <div className="featured-videos">
        <Title>Videos</Title>
      </div>
      <VideoUl>
        {videos[0] &&
          videos.map((video) => {
            const user = users?.find((user) => user?.id === video.userId);
            return <Video user={user} video={video} />;
          })}
      </VideoUl>
    </ContentDiv>
  );
}

export default HomePage
