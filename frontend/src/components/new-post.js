import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      timestamp: '',
      title: '',
      body: '',
      author: '',
      category: '',
    }
  }

  componentDidMount() {
    this.props.getCategories();
  }

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
              <div className="form-group">
                <label htmlFor="postAuthor">Author</label>
                <input type="text" className="form-control" id="postAuthor"/>
              </div>
              <div className="form-group">
                <label htmlFor="categoryChoice">Category</label>
                <select className="form-control" id="categoryChoice">
                  {this.props.categories.map(cat =>
                    (<option key={cat}>{cat}</option>)
                    )
                  }
                </select>
              </div>
              <button type="submit" className="btn btn-link">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  categories: state.categories,
})

export default connect(mapStateToProps, actions)(NewPost);
