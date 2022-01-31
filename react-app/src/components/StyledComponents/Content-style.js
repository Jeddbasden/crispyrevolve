import styled from "styled-components";


export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  align-items: center;
  background-color: #1c1c21;
  padding-bottom: 40px;
`;

export const SplashImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  background-image: url("https://images7.alphacoders.com/740/740615.png");
  background-position: top;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  position: static;
`;

export const MainTitle = styled.h1`
  font-size: 72px;
  background: -webkit-linear-gradient(#480ca8, #2187ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  font-size: $extra-large;
  font-weight: 900;
  font-family: "Catamaran", sans-serif;
  font-style: italic;
`;

export const SpacingDiv = styled.div`
  height: 600px
` 
