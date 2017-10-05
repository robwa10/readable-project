import { combineReducers } from 'redux';
import {
  RECIEVE_POSTS,
  RECIEVE_POST,
  RECIEVE_CATEGORIES,
  RECIEVE_COMMENTS,
  CHANGE_POST_SCORE,
  CHANGE_COMMENT_SCORE,
  }
  from '../actions';

const changeScore = (state, action) => {
  const data = action.response.data;
  return state.map((item) => {
    if (item.id !== data.id) {
      return item
    }
    return Object.assign({}, item, {
      voteScore: data.voteScore
    })
  })
};

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

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case RECIEVE_POSTS:
      return action.response.data
    case RECIEVE_POST:
      return [action.response.data]
    case CHANGE_POST_SCORE:
      return changeScore(state, action);
    default:
      return state;
  }
};

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case RECIEVE_COMMENTS:
      return action.response.data
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
});

export default rootReducer;
