import { RECIEVE_CATEGORIES } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case RECIEVE_CATEGORIES:
      let categories = action.payload.data.categories;
      return categories.map((cat) => {
        let array = [];
        array.push(cat.name);
        return array
      });
    default:
      return state;
  }
};
