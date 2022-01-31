const GET_VIDEOS = 'videos/GET_VIDEOS'
const ADD_VIDEO = 'videos/ADD_VIDEO'
const DELETE_VIDEO = 'videos/DELETE_VIDEO'
const EDIT_VIDEO = 'videos/EDIT_VIDEO'

const get_videos = (data) => ({
  type: GET_VIDEOS,
  data,
})

const add_video = (data) => ({
  type: ADD_VIDEO,
  data,
})

const delete_video = (data) => ({
  type: DELETE_VIDEO,
  data,
})

const edit_video = (data) => ({
  type: EDIT_VIDEO,
  data
})

export const getVideos = () => async (dispatch) => {
  const res = await fetch(`/api/videos/`)
  const data = await res.json();

  await dispatch(get_videos(data));
}

export const addVideo = (video) => async (dispatch) => {
  const res = await fetch('/api/videos/', {
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

  const data = await res.json()
  await dispatch(add_video(data))
}

export const deleteVideo = (video) => async (dispatch) => {
  const res = await fetch(`/api/videos/${video.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
  const data = await res.json()
  await dispatch(delete_video(data))
}

export const editVideo = (newVideo, id) => async (dispatch) => {
  const res = await fetch(`/api/videos/${id}/edit`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newVideo)
  })
  const data = await res.json();
  await dispatch(edit_video(data))
}


const videosReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {
    case GET_VIDEOS:
      newState = { ...state, };
      newState = action.data.videos;
      return newState;

    default:
      return state;
  }
}


export default videosReducer;
