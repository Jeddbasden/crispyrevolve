const GET_VIDEOS = 'videos/GET_VIDEOS'
const ADD_VIDEO = 'videos/GET_VIDEO'

const get_videos = (data) => ({
  type: GET_VIDEOS,
  data,
})

const add_video = (data) => ({
  type: ADD_VIDEO,
  data,
})

export const getVideos = () => async (dispatch) => {
  const res = await fetch(`api/videos`)
  const data = await res.json();

  await dispatch(get_videos(data));
}

export const addVideo = (video) => async (dispatch) => {
  const res = await fetch('api/videos/add', {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      title: video.title,
      videoUrl: video.videoUrl,
      description: video.description,
      imgUrl: video.imgUrl
    })
  });

  const data = res.json()
  await dispatch(add_video(data))
}

const videosReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {
    case GET_VIDEOS:
      const videos = action.data.videos
      newState = { ...state, };
      newState = videos
      return newState;
    default:
      return state;
  }
}


export default videosReducer;
