import axios from 'axios';

export const RECIEVE_CATEGORIES = 'RECIEVE_CATEGORIES';
export const RECIEVE_POSTS = 'RECIEVE_POSTS';
export const RECIEVE_POST = 'RECIEVE_POST';
export const CHANGE_POST_SCORE = 'CHANGE_POST_SCORE';
export const RECIEVE_COMMENTS = 'RECIEVE_COMMENTS';

//---------- Global API variables
const BASE_URL = "http://localhost:3001";

// Generate unique token for headers
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
}

//---------- GET API Action Creators
export const getPosts = (filter) => {
  return function(dispatch) {
    return axios.get(`${BASE_URL}/${filter}`, { headers })
      .then(response => dispatch({ type: RECIEVE_POSTS, response}))
  }
}

export const getPostsByCategory = (filter) => {
  return function(dispatch) {
    return axios.get(`${BASE_URL}/${filter}/posts`, { headers })
      .then(response => dispatch({ type: RECIEVE_POSTS, response}))
  }
}

export const getSinglePost = (filter) => {
  return function(dispatch) {
    return axios.get(`${BASE_URL}/posts/${filter}`, { headers })
      .then(response => dispatch({type: RECIEVE_POST, response}))
  }
}

export const getCategories = () => {
  return function(dispatch) {
    return axios.get(`${BASE_URL}/categories`, { headers })
    .then(response => dispatch({ type: RECIEVE_CATEGORIES, response}))
  }
}

export const getPostComments = (filter) => {
  return function(dispatch) {
    return axios.get(`${BASE_URL}/posts/${filter}/comments`, { headers })
    .then(response => dispatch({ type: RECIEVE_COMMENTS, response}))
  }
}

//---------- POST API Action Creators
export const postVote = (id, option) => {
  return function(dispatch) {
    return axios.post(`${BASE_URL}/posts/${id}`,{ option },{ headers })
    .then(response => dispatch({ type: CHANGE_POST_SCORE, response }));
  }
}
