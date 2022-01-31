import styled from "styled-components";


export const VideoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  margin: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 15px;
  color: #d8d3d3;
  background-color: #222226;
  border-radius: 10px;
  &:hover {
    transform: translateY(-7px);
  }
`;
export const ProfileImg = styled.img`
  border-radius: 25px;
  width: 36px;
  height: 36px;
  margin-right: 10px;
`;

export const VideoImg = styled.img`
  height: 150px;
  width: 250px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: static;
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
export const IndDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: flex-start;
  color: #2187ff;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
export const IndTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #2187ff;
`;

export const CommentsDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15px;
  color: #2187ff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const IndCommentDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #2187ff;
  margin-top: 10px;
`;
