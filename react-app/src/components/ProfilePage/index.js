import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { getUserVideos } from "../../store/videos";
import { ProfileInfoDiv } from "../StyledComponents/Profile-style";
import { BackgroundDiv, ContentDiv} from "../StyledComponents/Content-style";
import {Title} from "../StyledComponents/title-style"
import { ProfileImg } from "../StyledComponents/Video-style";
import "./ProfilePage.css"

const ProfilePage = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();

    let user;

    useEffect(async () => {
        
        const response = await fetch('/api/users/');
        const res = await response.json();
        const users = res.users
        user = users.find(user => user?.id === Number(userId))

        if(user !== undefined) await dispatch(getUserVideos(user?.id));
    }, [dispatch, userId])


    
    return (
        <ContentDiv>
        <BackgroundDiv>
            <img src={user?.backgroundImg} />
        </BackgroundDiv>
        <ProfileInfoDiv>
            <ProfileImg src={user?.profileImg} />
            <Title>{user?.username}</Title>
        </ProfileInfoDiv>
        </ContentDiv>
    )
}

export default ProfilePage;
