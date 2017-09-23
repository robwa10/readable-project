import * as API from '../API_Calls';
import * as actions from './action-constants';


export function fetchPosts() {
  const request = API.getPostsOrCategories('posts');
  return {
    type: actions.FETCH_POSTS,
    payload: request,
  };
}
