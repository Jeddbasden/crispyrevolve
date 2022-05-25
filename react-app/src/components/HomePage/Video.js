import { useHistory } from "react-router-dom";
import { ProfileImg, VideoDiv, VideoImg, Username, VideoTitle } from "../StyledComponents/Video-style";
import "./HomePage.css"
const Video = ({ user, video }) => {
  const history = useHistory();
  return (
    <li className="pulse" key={video?.id}>
      <VideoDiv
        onClick={(e) => {
          e.preventDefault();
          history.push(`/videos/${video?.id}`);
        }}
      >
        <div>
          <VideoImg
            className="videoImg"
            alt="video image"
            src={`${video?.imgUrl}`}
          />
        </div>
        <div className="videoInfo">
          <div className="title-profileDiv">
            <div className="proUser">
              <ProfileImg src={ user?.profileImg } />
              <Username>{user?.username}</Username>
            </div>
            <div className="videoTitle">
              <VideoTitle>{video?.title}</VideoTitle>
            </div>
          </div>
        </div>
      </VideoDiv>
    </li>
  );
}

export default Video;
