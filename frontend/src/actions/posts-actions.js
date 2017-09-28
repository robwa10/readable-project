import { RECIEVE_POSTS } from './action-constants';
import * as api from '../API_Calls';

export const fetchPosts = (filter) => {
  const bar = api.getPostsOrCategories('posts')
  const foo = api.getCategoryPosts(filter)
  if (filter === 'all') {
    return (
      {
          type: RECIEVE_POSTS,
          payload: bar,
        }
    )
  } else {
    return (
      {
          type: RECIEVE_POSTS,
          payload: foo,
        }
    )
  }
}
