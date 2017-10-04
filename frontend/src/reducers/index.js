import _ from 'lodash';
import { combineReducers } from 'redux';
import {
  RECIEVE_POSTS,
  RECIEVE_POST,
  RECIEVE_CATEGORIES,
  INCREMENT,
  DECREMENT, }
  from '../actions';

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case RECIEVE_POSTS:
      return action.response.data
    case RECIEVE_POST:
      return action.response.data
    default:
      return state;
  }
}

/*
const singlePostReducer = (state = [], action) => {
  switch (action.type) {

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
*/

const categoriesReducer = (state = ["categories"], action) => {
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

const filterOptions = () => (
  ["Newest", "Score - Highest First"]
)


const rootReducer = combineReducers({
  posts: postsReducer,
  categories: categoriesReducer,
  options: filterOptions,
});

export default rootReducer;
