const GET_VIDEOS = 'videos/GET_VIDEOS'

const get_videos = (data) => ({
  type: GET_VIDEOS,
  data,
})


export const getVideos = () => async (dispatch) => {
  const res = await fetch(`api/videos`)
  const data = await res.json();

  await dispatch(get_videos(data));
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
