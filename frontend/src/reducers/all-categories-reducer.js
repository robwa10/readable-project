import { RECIEVE_CATEGORIES } from '../actions/action-constants';

export default function(state = [], action) {
  switch (action.type) {
    case RECIEVE_CATEGORIES:
      return action.payload.data.categories;
    default:
      return state;
  }
}
