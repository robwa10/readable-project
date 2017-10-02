import { RECIEVE_POST, INCREMENT, DECREMENT } from '../actions';

export default function(state = {}, action) {
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
