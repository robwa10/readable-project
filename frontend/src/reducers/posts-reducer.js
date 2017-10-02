import { RECIEVE_POSTS,
  RECIEVE_POST,
  INCREMENT,
  DECREMENT } from '../actions';

export default allPostsReducer(state = [], action) {
  switch (action.type) {
    case RECIEVE_POSTS:
      return action.response.data;
    default:
      return state;

  }
}

export default singlePostReducer(state = {}, action) {
  switch (action.type) {
    case RECIEVE_POST:
      return action.response.data;
    case INCREMENT:
    case DECREMENT:
      return Object.assign({}, state, {
        voteScore: action.json.data.voteScore
      })
    default:
      return state;
  }
}
