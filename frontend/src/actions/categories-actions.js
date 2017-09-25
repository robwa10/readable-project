import { getPostsOrCategories } from '../API_Calls';
import { FETCH_CATEGORIES } from './action-constants';

export function fetchAllCategories() {
  const request = getPostsOrCategories('categories');
  console.log('All categories action: ', request);
  return {
    type: FETCH_CATEGORIES,
    payload: request,
  };
}
