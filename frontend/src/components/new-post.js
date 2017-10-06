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

  onChange(field, value) {
    if (field === 'title') {
      this.setState({ title: value });
    } else if (field === 'body') {
      this.setState({ body: value });
    } else if (field === 'author') {
      this.setState({ author: value });
    } else if (field === 'category') {
      this.setState({ category: value });
    } else {
      console.log('Input not returning correct value.');
    }
 }

  render () {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="postTitle">Post Title</label>
                <input type="text" className="form-control" id="postTitle" onChange={(event) => this.onChange('title', event.target.value)} value={this.state.title}/>
              </div>
              <div className="form-group">
                <label htmlFor="postBody">Post</label>
                <textarea className="form-control" id="postBody" rows="10" onChange={(event) => this.onChange('body', event.target.value)} value={this.state.body}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="postAuthor">Author</label>
                <input type="text" className="form-control" id="postAuthor" onChange={(event) => this.onChange('author', event.target.value)} value={this.state.author}/>
              </div>
              <div className="form-group">
                <label htmlFor="categoryChoice">Category</label>
                <select onChange={(event) => this.onChange('category', event.target.value)} className="form-control" id="categoryChoice">
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
