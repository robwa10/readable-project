import {
  getPostsOrCategories,
  getSinglePostOrComment,
} from '../API_Calls';
import {
  FETCH_POSTS,
  FETCH_SINGLE_POST,
} from './action-constants';


export function fetchAllPosts() {
  const request = getPostsOrCategories('posts');
  console.log('All Post Action: ', request);
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

export function fetchSinglePost(id) {
  const request = getSinglePostOrComment('posts', id);
  console.log('1 Post Action: ', request);
  return {
    type: FETCH_SINGLE_POST,
    payload: request,
  }
}
