import { combineReducers } from 'redux';
import allPostsReducer from './all-posts-reducer';
import allCategoriesReducer from './all-categories-reducer';
import filterOptions from './filter-options-reducer';

const rootReducer = combineReducers({
  posts: allPostsReducer,
  categories: allCategoriesReducer,
  options: filterOptions,
});

export default rootReducer;
