import { RECIEVE_POSTS } from '../actions/action-constants';

export default function(state = [], action) {
  switch (action.type) {
    case RECIEVE_POSTS:
      console.log("Returned new post state.");
      return action.payload.data;
    default:
      console.log("Returned default post state.");
      return state;

  }
}
