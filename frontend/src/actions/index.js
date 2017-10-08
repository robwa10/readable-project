import axios from 'axios';

export const RECIEVE_CATEGORIES = 'RECIEVE_CATEGORIES';
export const RECIEVE_POSTS = 'RECIEVE_POSTS';
export const RECIEVE_POST = 'RECIEVE_POST';
export const RECIEVE_COMMENTS = 'RECIEVE_COMMENTS';
export const RECIEVE_SINGLE_COMMENT = 'RECIEVE_SINGLE_COMMENT';
export const CHANGE_POST_SCORE = 'CHANGE_POST_SCORE';
export const CHANGE_COMMENT_SCORE = 'CHANGE_COMMENT_SCORE';
export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_POST = 'DELETE_POST';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';

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

export const getSingleComment = (filter) => {
  return function(dispatch) {
    return axios.get(`${BASE_URL}/comments/${filter}`, { headers })
      .then(response => dispatch({type: RECIEVE_SINGLE_COMMENT, response}))
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

export const commentVote = (id, option) => {
  return function(dispatch) {
    return axios.post(`${BASE_URL}/comments/${id}`,{ option },{ headers })
    .then(response => dispatch({ type: CHANGE_COMMENT_SCORE, response }));
  }
}

export const createPost = (values, callback) => {
  return function(dispatch) {
    return axios.post(`${BASE_URL}/posts`, values, { headers })
    .then(response => dispatch({ type: ADD_POST, response }))
    .then(() => callback());
  }
}

export const createComment = (values, callback) => {
  return function(dispatch) {
    return axios.post(`${BASE_URL}/comments`, values, { headers })
    .then(response => dispatch({ type: ADD_COMMENT, response }))
    .then(() => callback());
  }
}

//---------- PUT API Action Creators
export const editComment = (id, values, callback) => {
  return function(dispatch) {
    return axios.put(`${BASE_URL}/comments/${id}`,values, { headers })
    .then(response => dispatch({ type: EDIT_COMMENT, response}))
    .then(() => callback());
  }
}

//---------- DELETE API Action Creators
export const deletePost = (id, callback) => {
  return function(dispatch) {
    return axios.delete(`${BASE_URL}/posts/${id}`, { headers })
    .then(response => dispatch({ type: DELETE_POST, response }))
    .then(() => callback());
  }
}

export const deleteComment = (id, callback) => {
  return function(dispatch) {
    return axios.delete(`${BASE_URL}/comments/${id}`, { headers })
    .then(response => dispatch({ type: DELETE_COMMENT, response }))
    .then(() => callback());
  }
}
