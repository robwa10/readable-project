import { combineReducers } from 'redux';
import allPostsReducer from './all-posts-reducer';

const rootReducer = combineReducers({
  posts: allPostsReducer,
});

export default rootReducer;
