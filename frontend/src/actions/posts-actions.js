import { getPostsOrCategories } from '../API_Calls';
import { FETCH_POSTS } from './action-constants';


export function fetchAllPosts() {
  const request = getPostsOrCategories('posts');
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}
