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

  componentWillReceiveProps() {
    if (this.props.posts[0] !== undefined) {
      this.editPost();
    }
  }

  editPost() {
    const p = this.props.posts[0];
    this.setState({
      title: p.title,
      body: p.body,
      author: p.author,
    })
  }

  render () {
    console.log('Edit State: ', this.state);
    const {
      title,
      body,
      author,
    } = this.props.editPost;
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="postTitle">Post Title</label>
                <input type="text" className="form-control" id="postTitle" value={this.state.title}/>
              </div>
              <div className="form-group">
                <label htmlFor="postBody">Post</label>
                <textarea className="form-control" id="postBody" rows="10" value={this.state.body}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="postAuthor">Author</label>
                <input type="text" className="form-control" id="postAuthor" value={this.state.author}/>
              </div>
              <div className="form-group">
                <label htmlFor="categoryChoice">Category</label>
                <select className="form-control" id="categoryChoice">
                  {this.props.categories.map(cat =>
                    (<option key={cat} value={cat}>{cat}</option>)
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

const mapStateToProps = (state, { match }) => {
  const id = match.params.id;
  return {
    posts: state.posts,
    categories: state.categories,
    editPost: state.editPost,
  }

}

export default connect(mapStateToProps, actions)(NewPost);
