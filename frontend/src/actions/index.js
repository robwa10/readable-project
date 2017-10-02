import axios from 'axios';

export const RECIEVE_CATEGORIES = 'RECIEVE_CATEGORIES';
export const RECIEVE_POSTS = 'RECIEVE_POSTS';
export const RECIEVE_POST = 'RECIEVE_POST';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

//---------- GET API Action Creators
const BASE_URL = "http://localhost:3001";

// Generate unique token for headers
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
}

export const getPosts = (filter) => {
  return function(dispatch) {
    return fetch(`${BASE_URL}/${filter}`, { headers })
      .then(resp => resp.json())
      .then(json => dispatch({ type: RECIEVE_POSTS, json}))
  }
}

export const getPostsByCategory = (filter) => {
  return function(dispatch) {
    return fetch(`${BASE_URL}/${filter}/posts`, { headers })
      .then(resp => resp.json())
      .then(json => dispatch({ type: RECIEVE_POSTS, json}))
  }
}

export const getSinglePost = (filter) => {
  return function(dispatch) {
    return fetch(`${BASE_URL}/posts/${filter}`, { headers })
      .then(resp => resp.json())
      .then(json => dispatch({type: RECIEVE_POST, json}))
  }
}

export const getCategories = () => {
  return function(dispatch) {
    return fetch(`${BASE_URL}/categories`, { headers })
      .then(resp => resp.json())
      .then(json => dispatch({ type: RECIEVE_CATEGORIES, json}))
  }
}


//---------- POST API Action Creators
export const postVote = (id, option) => {
  return function(dispatch) {
    return axios.post(`${BASE_URL}/posts/${id}`,{ option },{ headers })
    .then(json => dispatch({ type: INCREMENT, json }));
  }
}
