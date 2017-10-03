import _ from 'lodash';
import { combineReducers } from 'redux';
import { RECIEVE_POSTS,
  RECIEVE_POST,
  RECIEVE_CATEGORIES,
  INCREMENT,
  DECREMENT } from '../actions';

import filterOptions from './filter-options-reducer';

const initialState = [{
author: null,
body: null,
category: null,
deleted: false,
id: null,
timestamp: null,
title: "Loading...",
voteScore: null,
}]

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case RECIEVE_CATEGORIES:
      let categories = action.response.data.categories;
      return categories.map((cat) => {
        let array = [];
        array.push(cat.name);
        return array
      });
    default:
      return state;
  }
};


const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_POSTS:
      return action.response.data
    default:
      return state;

  }
}

const singlePostReducer = (state = {}, action) => {
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

const filterOptions = () => (
  ["Newest", "Authors", "Score - Highest First"]
)


const rootReducer = combineReducers({
  posts: postsReducer,
  categories: categoriesReducer,
  options: filterOptions,
});

export default rootReducer;
