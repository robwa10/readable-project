import _ from 'lodash';
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux';

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

const rootReducer = combineReducers({
  form: formReducer,
});

export default rootReducer;
