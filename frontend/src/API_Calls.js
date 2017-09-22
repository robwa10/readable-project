const BASE_URL = "http://localhost:3001";

// Generate unique token
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
}

// GET API Calls
export const getPostsOrCategories = (route) =>
  fetch(`${BASE_URL}/${route}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getCategoryPosts = (category) =>
    fetch(`${BASE_URL}/${category}/posts`, { headers })
      .then(res => res.json())
      .then(data => data)

export const getSinglePostOrComment = (route, id) =>
  fetch(`${BASE_URL}/${route}/${id}`, {headers})
    .then(res => res.json())
    .then(data => data)

export const getPostComments = (id) =>
  fetch(`${BASE_URL}/posts/${id}/comments`, {headers})
    .then(res => res.json())
    .then(data => data)

// POST API Calls
export const addPostOrComment = (data, url) => {
  let fetchData = {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
        },
      body : JSON.stringify(data)
    };
  fetch(`${BASE_URL}/${url}`, fetchData)
  .then(res =>res.json())
}

export const changeScore = (id,url, data) => {
  let fetchData = {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
        },
      body : JSON.stringify(data)
    };
  fetch(`${BASE_URL}/${url}/${id}`, fetchData)
  .then(res =>res.json())
  .then(data => data)
}

export const changeCommentScore = (id, data) => {
  let fetchData = {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
        },
      body : JSON.stringify(data)
    };
  fetch(`${BASE_URL}/comments/${id}`, fetchData)
  .then(res =>res.json())
  .then(data => data)
}
