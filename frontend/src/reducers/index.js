import { combineReducers } from 'redux';
import allPostsReducer from './all-posts-reducer';
import allCategoriesReducer from './all-categories-reducer';
import singlePostReducer from './single-post-reducer';
import filterOptions from './filter-options-reducer';

const rootReducer = combineReducers({
  posts: allPostsReducer,
  categories: allCategoriesReducer,
  options: filterOptions,
  post: singlePostReducer,
});

export default rootReducer;
