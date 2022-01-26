const UPDATE_COMMENTS = 'comments/UPDATE_COMMENTS'

const update_comments = (data) => ({
  type: UPDATE_COMMENTS,
  data
})

export const getComments = (videoId) => async(dispatch) => {
  const res = await fetch(`/api/comments/${videoId}`);
  const data = await res.json();

  await dispatch(update_comments(data))
}

export const addComment = (comment) => async (dispatch) => {
  
  const res = await fetch(`/api/comments/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment)
  });

  const data = await res.json();

  await dispatch(update_comments(data))
}

export const deleteComment = (comment) => async (dispatch) => {
  const res = await fetch(`/api/comments/${comment.id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  await dispatch(update_comments(data))
}

const CommentsReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {

    case UPDATE_COMMENTS:
      const comments = action.data.comments
      newState = { ...state, }
      newState = comments;
      return newState;
    
    default:
      return state;
  }
}

export default CommentsReducer;
