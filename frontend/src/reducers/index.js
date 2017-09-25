import { combineReducers } from 'redux';
import allPostsReducer from './all-posts-reducer';
import allCategoriesReducer from './all-categories-reducer';

const rootReducer = combineReducers({
  posts: allPostsReducer,
  categories: allCategoriesReducer,
});

export default rootReducer;
