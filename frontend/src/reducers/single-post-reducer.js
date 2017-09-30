import { RECIEVE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case RECIEVE_POST:
      return action.payload.data;
    default:
      return state;
  }
}
