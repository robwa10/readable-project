import axios from 'axios';

export const RECIEVE_CATEGORIES = 'RECIEVE_CATEGORIES';
export const RECIEVE_POSTS = 'RECIEVE_POSTS';
export const RECIEVE_POST = 'RECIEVE_POST';
export const ALL_POSTS = 'all';

export function recieveCategories(categories) {
  return {
    type: RECIEVE_CATEGORIES,
    payload: categories,
  };
}

//---------- API Action Creators

const BASE_URL = "http://localhost:3001";

// Generate unique token for headers
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
}

// Base axios call
const getData = (path) => (axios.get(`${BASE_URL}/${path}`, { headers }));

// Get all posts or posts filtered by category
export const getPosts = (filter) => {
  let request;
  if (filter === 'posts') {
    request = getData(filter);
  } else {
    request = getData(`${filter}/posts`);
  }
  return ({ type: RECIEVE_POSTS, payload: request})
}

// Get a single post
export const getSinglePost = (filter) => (
  {type: RECIEVE_POST, payload: getData(`posts/${filter}`)}
);

//---------- End API Action Creators
