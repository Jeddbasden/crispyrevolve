import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { getVideos } from '../../store/videos'

// import "~video-react/dist/video-react.css";

import './HomePage.css'

const HomePage = () => {
  const videos = useSelector(state => state.videos);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch])

  return (
    <ul>
      {videos[0] && (videos.map(video => {
        return (
          <li key={video?.id}>
            <img
              onClick={(e) => {
                e.preventDefault();
                history.push(`/videos/${video?.id}`)
              }}
              src={`${video?.imgUrl}`} />
            <h2>{video?.title}</h2>
          </li>
        )
      }))}
    </ul>
  )
}

export default HomePage
