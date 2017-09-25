import { RECIEVE_CATEGORIES } from './action-constants';

export function recieveCategories(categories) {
  return {
    type: RECIEVE_CATEGORIES,
    payload: categories,
  };
}
