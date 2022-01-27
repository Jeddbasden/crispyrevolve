import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { getVideos } from '../../store/videos'

// import "~video-react/dist/video-react.css";

import './HomePage.css'

const HomePage = () => {
  const videos = useSelector(state => state.videos);
  const user = useSelector(state => state.session.user) 
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const doIt = async () => {
      await dispatch(getVideos());
    }
    doIt();
  }, [dispatch])

  return (
    <div className="main-page-div">
      <div>
        <img
          className="main-background"
          src="https://images7.alphacoders.com/740/740615.png"
        />
      </div>
      <div classname="featured-videos">
        <h1>Featured Videos</h1>
      </div>
      <hr />
      <ul>
        <div className="section">
          {videos[0] &&
            videos.map((video) => {
              return (
                <li key={video?.id}>
                  <div>
                    <h3>{video?.title}</h3>
                    <img
                      onClick={(e) => {
                        e.preventDefault();
                        history.push(`/videos/${video?.id}`);
                      }}
                      alt="video image"
                      src={`${video?.imgUrl}`}
                    />
                  </div>
                </li>
              );
            })}
        </div>
      </ul>
    </div>
  );
}

export default HomePage
