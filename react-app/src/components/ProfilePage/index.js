import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { ContentDiv } from "../StyledComponents/Content-style";
import "./ProfilePage.css"

const ProfilePage = () => {
  return (
    <ContentDiv>
      <div className="backImg">
        <img src="https://i.pinimg.com/originals/50/d6/65/50d66570e5b92307d80313e0a07f5701.jpg" alt='backgroundImg'/>
      </div>
    </ContentDiv>
  )
}

export default ProfilePage;
