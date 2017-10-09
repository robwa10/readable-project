import _ from 'lodash';
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux';
import * as actions from '../actions/action-constants';

/*
***** Test this when you get back to your laptop. ******

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
  // Sort by author then map back to Object of objects
  return _.mapKeys(newData.sort(dynamicSort(sortType)), 'id');
}
*/

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
      return sortPosts(action.filter, action.response.data); // Pass state and filter to test new function
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
