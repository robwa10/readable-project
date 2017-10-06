import React, { Component } from 'react';

class NewPost extends Component {
  render () {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="postTitle">Post Title</label>
                <input type="text" className="form-control" id="postTitle"/>
              </div>
              <div className="form-group">
                <label htmlFor="postBody">Post</label>
                <textarea className="form-control" id="postBody" rows="10"></textarea>
              </div>
              <button type="submit" className="btn btn-link">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
};
}

export default NewPost;
