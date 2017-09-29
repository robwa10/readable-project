import { ALL_POSTS } from '../actions';

const visibilityFilter = (state = ALL_POSTS, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state;
  }
}

export default visibilityFilter;
