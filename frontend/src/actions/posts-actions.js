import { RECIEVE_POSTS } from './action-constants';

export function recievePosts(posts) {
  return {
    type: RECIEVE_POSTS,
    payload: posts,
  };
}
