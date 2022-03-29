import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

import { getUserVideos } from "../../store/videos";
import Video from "../HomePage/Video";

import { ProfileImgBig, ProfileInfoDiv, SplashBackgroundImgDiv } from "../StyledComponents/Profile-style";
import { BackgroundDiv, ContentDiv, Image} from "../StyledComponents/Content-style";
import {ProfileTitle} from "../StyledComponents/Profile-style"
import { ProfileImg, VideoUl } from "../StyledComponents/Video-style";
import { Title } from "../StyledComponents/title-style";
import "./ProfilePage.css"

const ProfilePage = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();

    const [user, setUser] = useState({});

    const allVideos = useSelector(state => state.videos);
    const videos = allVideos.filter(video => video.userId === Number(userId));
    
    useEffect(async () => {
        
        const response = await fetch('/api/users/');
        const res = await response.json();
        const users = res.users
        setUser(users.find(user => user?.id === Number(userId)))

        dispatch(getUserVideos(user.id));
    }, [dispatch, userId]) 
    
    const SplashBackgroundImgDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 600px;
        background-image: url(${user?.backgroundImg});
        background-position: top;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        position: static;
    `;
    
    return (
        <ContentDiv>
        <SplashBackgroundImgDiv>
            <ProfileImgBig src={user?.profileImg} />
            <ProfileTitle>{user?.username}</ProfileTitle>
        </SplashBackgroundImgDiv>
        <ProfileInfoDiv>
            <Title>Videos</Title>
            <VideoUl>
            {videos[0] &&
                videos.map((video) => {
                return <Video user={user} video={video} />;
                })}
            </VideoUl>
        </ProfileInfoDiv>
        </ContentDiv>
    );
}

export default ProfilePage;
