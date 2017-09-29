
function getData(route, id, category) {
  const BASE_URL = "http://localhost:3001";
  let path;
  let action;
  if (route) {
    if (id) { // route and id true
      path = `${route}/${id}`;
      action = 'RECIEVE_POST';
    } else { // Only route is true
      path = `${route}`;
      action = 'RECIEVE_POSTS';
    }
  } else if (id) { // Only id true
    path = `posts/${id}/comments`;
    action = 'RECIEVE_POST_COMMENTS';
  } else if (category) { // Only category true
    path = `${category}/posts`;
    action = 'RECIEVE_CATEGORIES';
  } else {
    console.log('Error fetching data.');
  }
  const request = axios.get(`${BASE_URL}/${path}`, { headers });
  return(
    {type: action, payload: request,}
  )
}
