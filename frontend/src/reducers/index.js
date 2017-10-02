import { combineReducers } from 'redux';
import { allPostsReducer, singlePostReducer } from './posts-reducer';
import allCategoriesReducer from './all-categories-reducer';
import filterOptions from './filter-options-reducer';

const rootReducer = combineReducers({
  posts: allPostsReducer,
  categories: allCategoriesReducer,
  options: filterOptions,
  post: singlePostReducer,
});

export default rootReducer;
