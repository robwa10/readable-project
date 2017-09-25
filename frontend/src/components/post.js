import React, { Component } from 'react';
import { loremText } from '../lorem-ipsum';
import VoteButton from '../components/vote-button';
import Fab from '../components/fab';

class Post extends Component {

  render () {
    return (
      <div>
          <div className="container">
            <div className="card">
              <div className="card-body">
                <div className="card-title"><h2>A Title</h2></div>
                <div className="card-text">
                  <p>{loremText}</p>
                </div>
                <h6>Author: Bob</h6>
                <h6>Date</h6>
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
