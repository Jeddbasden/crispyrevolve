const GET_COMMENTS = 'comments/GET_COMMENTS'

const get_comments = (data) => ({
  type: GET_COMMENTS,
  data
})

export const getComments = (videoId) => async(dispatch) => {
  const res = await fetch(`/api/comments/${videoId}`);
  const data = await res.json();

  await dispatch(get_comments(data))
}


const CommentsReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {
    case GET_COMMENTS:
      const comments = action.data.comments
      newState = { ...state, }
      newState = comments;
      return newState;

    default:
      return state;
  }
}

export default CommentsReducer;
