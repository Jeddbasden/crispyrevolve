import styled from "styled-components";

export const ProfileInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1c1c21;
  width: 100%;
  height: auto;
`;
export const SplashBackgroundImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  background-position: top;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  position: static;
`;

export const ProfileTitle = styled.h1`
  position: relative;
  text-transform: uppercase;
  font-size: $extra-large;
  font-weight: 900;
  font-family: "Catamaran", sans-serif;
  background-color: #1c1c21;
  font-style: italic;
  padding: 4px 10px;
  border-radius: 10px;
  color: #2187ff;
`;

export const ProfileImgBig = styled.img`
  border-radius: 100px;
  width: 200px;
  height: 200px;
  margin-right: 10px;
`;

export const ProfileImgMid = styled.img`
  border-radius: 100px;
  width: 65px;
  height: 65px;
  margin-right: 10px;
`;
