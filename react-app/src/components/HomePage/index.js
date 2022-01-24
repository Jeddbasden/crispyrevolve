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
    <ul>
      {user && (
        <NavLink to="/videos/add">Add a Video</NavLink>
      )}
      <div>
      {videos[0] && (videos.map(video => {
        return (
          <li key={video?.id}>
            <h2>{video?.title}</h2>
            <img
              onClick={(e) => {
                e.preventDefault();
                history.push(`/videos/${video?.id}`)
              }}
              alt='video image'
              src={`${video?.imgUrl}`} />
          </li>
        )
      }))}
      </div>
    </ul>
  )
}

export default HomePage
