import _ from 'lodash';
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux';
import * as actions from '../actions/action-constants';

const compareAsc = (a, b) => {
  const authorA = a.author.toUpperCase();
  const authorB = b.author.toUpperCase();

  let comparison = 0;
  if (authorA > authorB) {
    comparison = 1;
  } else if (authorA < authorB) {
    comparison = -1;
  }
  return comparison;
}

const compareDsc = (a, b) => {
  const authorA = a.author.toUpperCase();
  const authorB = b.author.toUpperCase();

  let comparison = 0;
  if (authorA > authorB) {
    comparison = 1;
  } else if (authorA < authorB) {
    comparison = -1;
  }
  return comparison * -1;
}

const sortPosts = (filter, data) => {
  if (filter === 'asc') {
    return _.mapKeys(data.sort(compareAsc), 'id');
  } else {
    return _.mapKeys(data.sort(compareDsc), 'id');
  }
}

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
    case actions.RECIEVE_CATEGORIES:
      return mapCategories(action)
    default:
      return state;
  }
};

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.RECIEVE_POSTS:
      return _.mapKeys(action.response.data, 'id');
    case actions.RECIEVE_POST:
      return {[action.response.data.id]: action.response.data}
    case actions.CHANGE_POST_SCORE:
      return changeScore(state, action);
    case actions.SORT_POSTS:
      return sortPosts(action.filter, action.response.data);
    default:
      return state;
  }
};

const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.RECIEVE_COMMENTS:
      return _.mapKeys(action.response.data, 'id');
//    case RECIEVE_SINGLE_COMMENT:
//      console.log(action.response.data);
//      return action.response.data;
    case actions.CHANGE_COMMENT_SCORE:
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
