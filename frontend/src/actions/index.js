import axios from 'axios';
import * as actions from './action-constants';

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
      .then(response => dispatch({ type: actions.RECIEVE_POSTS, response}))
  }
}

export const getPostsByCategory = (filter) => {
  return function(dispatch) {
    return axios.get(`${BASE_URL}/${filter}/posts`, { headers })
      .then(response => dispatch({ type: actions.RECIEVE_POSTS, response}))
  }
}

export const getSinglePost = (filter) => {
  return function(dispatch) {
    return axios.get(`${BASE_URL}/posts/${filter}`, { headers })
      .then(response => dispatch({type: actions.RECIEVE_POST, response}))
  }
}

export const getSingleComment = (filter) => {
  return function(dispatch) {
    return axios.get(`${BASE_URL}/comments/${filter}`, { headers })
      .then(response => dispatch({type: actions.RECIEVE_SINGLE_COMMENT, response}))
  }
}

export const getCategories = () => {
  return function(dispatch) {
    return axios.get(`${BASE_URL}/categories`, { headers })
    .then(response => dispatch({ type: actions.RECIEVE_CATEGORIES, response}))
  }
}

export const getPostComments = (filter) => {
  return function(dispatch) {
    return axios.get(`${BASE_URL}/posts/${filter}/comments`, { headers })
    .then(response => dispatch({ type: actions.RECIEVE_COMMENTS, response}))
  }
}

//---------- POST API Action Creators
export const postVote = (id, option) => {
  return function(dispatch) {
    return axios.post(`${BASE_URL}/posts/${id}`,{ option },{ headers })
    .then(response => dispatch({ type: actions.CHANGE_POST_SCORE, response }));
  }
}

export const commentVote = (id, option) => {
  return function(dispatch) {
    return axios.post(`${BASE_URL}/comments/${id}`,{ option },{ headers })
    .then(response => dispatch({ type: actions.CHANGE_COMMENT_SCORE, response }));
  }
}

export const createPost = (values, callback) => {
  return function(dispatch) {
    return axios.post(`${BASE_URL}/posts`, values, { headers })
    .then(response => dispatch({ type: actions.ADD_POST, response }))
    .then(() => callback());
  }
}

export const createComment = (values, callback) => {
  return function(dispatch) {
    return axios.post(`${BASE_URL}/comments`, values, { headers })
    .then(response => dispatch({ type: actions.ADD_COMMENT, response }))
    .then(() => callback());
  }
}

//---------- PUT API Action Creators
export const editPost = (id, values, callback) => {
  return function(dispatch) {
    return axios.put(`${BASE_URL}/posts/${id}`,values, { headers })
    .then(response => dispatch({ type: actions.EDIT_POST, response}))
    .then(() => callback());
  }
}

export const editComment = (id, values, callback) => {
  return function(dispatch) {
    return axios.put(`${BASE_URL}/comments/${id}`,values, { headers })
    .then(response => dispatch({ type: actions.EDIT_COMMENT, response}))
    .then(() => callback());
  }
}

//---------- DELETE API Action Creators
export const deletePost = (id, callback) => {
  return function(dispatch) {
    return axios.delete(`${BASE_URL}/posts/${id}`, { headers })
    .then(response => dispatch({ type: actions.DELETE_POST, response }))
    .then(() => callback());
  }
}

export const deleteComment = (id, callback) => {
  return function(dispatch) {
    return axios.delete(`${BASE_URL}/comments/${id}`, { headers })
    .then(response => dispatch({ type: actions.DELETE_COMMENT, response }))
    .then(() => callback());
  }
}
