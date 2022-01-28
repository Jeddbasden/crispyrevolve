import styled from "styled-components";


export const VideoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  margin: 10px;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: #d8d3d3;
`;
export const ProfileImg = styled.img`
  border-radius: 25px;
  width: 36px;
  height: 36px;
  margin-right: 10px;
`;

export const VideoImg = styled.img`
  height: auto;
  width: 250px;
`;

export const VideoUl = styled.ul`
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: -5px;
  background-color: #1c1c21;
  padding: 30px;
`;

export const Username = styled.p`
  margin: 0px;
  color: #7f7f7f;
`;

export const VideoTitle = styled.p`
  margin: 2px;
`
