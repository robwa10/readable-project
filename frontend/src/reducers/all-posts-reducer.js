import { RECIEVE_POSTS } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case RECIEVE_POSTS:
      return action.payload.data;
    default:
      return state;

  }
}
