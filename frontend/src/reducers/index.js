import _ from 'lodash';
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux';
import {
  RECIEVE_POSTS,
  RECIEVE_POST,
  RECIEVE_CATEGORIES,
  RECIEVE_COMMENTS,
  RECIEVE_SINGLE_COMMENT,
  CHANGE_POST_SCORE,
  CHANGE_COMMENT_SCORE,
  DELETE_COMMENT,
  }
  from '../actions';

const mapCategories = (action) => {
  const categories = action.response.data.categories;
  let newArray = [];
  categories.map(cat => newArray.push(cat.name));
  return newArray
}

const changeScore = (state, action) => {
  const data = action.response.data;
  const id = action.response.data.id;
  return Object.assign({}, state, {
    [id]: data,
  })
};

const categoriesReducer = (state = ["categories"], action) => {
  switch (action.type) {
    case RECIEVE_CATEGORIES:
      return mapCategories(action)
    default:
      return state;
  }
};

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_POSTS:
      return _.mapKeys(action.response.data, 'id');
    case RECIEVE_POST:
      return {[action.response.data.id]: action.response.data}
    case CHANGE_POST_SCORE:
      return changeScore(state, action);
    default:
      return state;
  }
};

const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_COMMENTS:
      return _.mapKeys(action.response.data, 'id');
//    case RECIEVE_SINGLE_COMMENT:
//      console.log(action.response.data);
//      return action.response.data;
    case CHANGE_COMMENT_SCORE:
      return changeScore(state, action)
    default:
      return state;
  }
}


const filterOptions = () => (
  ["Newest", "Score - Highest First"]
);


const rootReducer = combineReducers({
  posts: postsReducer,
  categories: categoriesReducer,
  options: filterOptions,
  comments: commentsReducer,
  form: formReducer,
});

export default rootReducer;
