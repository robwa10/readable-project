import { combineReducers } from 'redux';
import {
  RECIEVE_POSTS,
  RECIEVE_POST,
  RECIEVE_CATEGORIES,
  CHANGE_POST_SCORE,
  }
  from '../actions';

  const changeScore = (state, action) => {
    const data = action.response.data;
    let newArray = state.slice();
    newArray.map((post, index) => {
      if (post.id === data.id) {
        return post.voteScore = data.voteScore
      }
    })
    return newArray;
  }

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
}

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
