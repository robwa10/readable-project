import { combineReducers } from 'redux';
import {
  RECIEVE_POSTS,
  RECIEVE_POST,
  RECIEVE_CATEGORIES,
  RECIEVE_COMMENTS,
  CHANGE_POST_SCORE,
  }
  from '../actions';

const changeScore = (state, action) => {
  const data = action.response.data;
  return state.map((post) => {
    if (post.id !== data.id) {
      return post
    }
    return Object.assign({}, post, {
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
  console.log("comments reducer: ", action);
  switch (action.type) {
    case RECIEVE_COMMENTS:
      console.log("RECIEVE_COMMENTS: ", action.response.data);
      return action.response.data
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
