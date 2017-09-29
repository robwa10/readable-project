import * as api from '../API_Calls';
import axios from 'axios';

export const RECIEVE_CATEGORIES = 'RECIEVE_CATEGORIES';
export const RECIEVE_POSTS = 'RECIEVE_POSTS';
export const ALL_POSTS = 'all';

export function recieveCategories(categories) {
  return {
    type: RECIEVE_CATEGORIES,
    payload: categories,
  };
}

// API base url
const BASE_URL = "http://localhost:3001";

// Generate unique token for headers
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
}

const getData = (path) => (axios.get(`${BASE_URL}/${path}`, { headers }));

const getAllPosts = () => (getData('posts'));

const getFilteredPosts = (filter) => (getData(`${filter}/posts`));

export const getPosts = (filter) => {
  let request;
  if (filter === 'posts') {
    request = getAllPosts(filter);
  } else {
    request = getFilteredPosts(filter);
  }
  return ({ type: 'RECIEVE_POSTS', payload: request})
}

// Action creator for all API Get requests
function myData(route, id, category) {
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
