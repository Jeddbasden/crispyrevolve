// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useHistory, useParams } from "react-router-dom";
// import { getUserVideos } from "../../store/videos";
// import { BackgroundDiv, ContentDiv} from "../StyledComponents/Content-style";
// import {Title} from "../StyledComponents/title-style"
// import { ProfileImg } from "../StyledComponents/Video-style";
// import "./ProfilePage.css"

// const ProfilePage = () => {
//   const [users, setUsers] = useState([]);
//   const dispatch = useDispatch();
//   const { userId } = useParams();

//   let user;

//   useEffect(async () => {
//     const doIt = async () => {
//       const response = await fetch('/api/users/');
//       const responseData = await response.json();
//       console.log("!!!!!!! DOING IT!!!!!!!", responseData.users)
//       setUsers(responseData.users);
//     }

//     await doIt();
//     console.log("!!!!!!! USERS !!!!!!!", users)
//     user = users.find(user => user?.id === Number(userId))
//     console.log("!!!!!!!!USER!!!!!!", user)
//   }, [])


  
//   // useEffect(async () => {
//   //   await dispatch(getUserVideos(user?.id));
//   // }, [dispatch])
  
//   return (
    // <ContentDiv>
    //   <BackgroundDiv>
    //     <img src={user?.backgroundImg} />
    //   </BackgroundDiv>
    //   <ProfileInfoDiv>
    //     <ProfileImg src={user?.profileImg} />
    //     <Title>{user?.username}</Title>
    //   </ProfileInfoDiv>
    // </ContentDiv>
//   )
// }

// export default ProfilePage;
