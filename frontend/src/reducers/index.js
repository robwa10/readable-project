import _ from 'lodash';
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux';
import * as actions from '../actions/action-constants';

// Thanks to Ege Ozcan for his solution on Stack Overflow to sorting an
// array of objects with a function that takes multiple paramaters.
// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
const dynamicSort = (property) => {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

const sortPosts = (state, filter) => {
  const newData = Object.values(state); // Convert to array of objects to sort
  let sortType = "author";
  if (filter === "dsc") {
    sortType = "-author"; // Sort in descending order
  }
  // Sort then map back to Object
  return _.mapKeys(newData.sort(dynamicSort(sortType)), 'id');
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

const categories = (state = ["categories"], action) => {
  switch (action.type) {
    case actions.RECIEVE_CATEGORIES:
      return mapCategories(action)
    default:
      return state;
  }
};

const posts = (state = {}, action) => {
  switch (action.type) {
    case actions.RECIEVE_POSTS:
      return _.mapKeys(action.response.data, 'id');
    case actions.RECIEVE_POST:
      return {[action.response.data.id]: action.response.data}
    case actions.CHANGE_POST_SCORE:
      return changeScore(state, action);
    case actions.SORT_POSTS:
      return sortPosts(state, action.filter);
    default:
      return state;
  }
};

const comments = (state = {}, action) => {
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

const options = () => (
  ["Newest", "Score - Highest First"]
);

const rootReducer = combineReducers({
  posts,
  categories,
  options,
  comments,
  form: formReducer,
});

export default rootReducer;
