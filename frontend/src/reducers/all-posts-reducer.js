import * as API_Calls from '../API_Calls';

export default function() {
  API_Calls.getPostsOrCategories('posts').then((data) => {
    return [data]
  });
}
