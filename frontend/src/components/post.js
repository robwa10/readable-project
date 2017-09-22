import React, { Component } from 'react';
import { loremText } from '../lorem-ipsum';
import VoteButton from './vote-button';
import Fab from '../components/fab';

class Post extends Component {

  render () {
    return (
      <div>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="card-title"><h2>A New Post</h2></div>
              <div className="card-text">
                <p>{loremText}</p>
                <p>{loremText}</p>
                <p>{loremText}</p>
                <p>{loremText}</p>
                <p>{loremText}</p>
                <p>{loremText}</p>
              </div>
              <h6>Author: John Doe</h6>
              <h6>01-02-2017 8:49pm</h6>
              <VoteButton />
              <button className="btn btn-secondary mt-3">Edit</button>
            </div>
          </div>
        </div>
        <Fab />
      </div>
    );
  }
}

export default Post;
