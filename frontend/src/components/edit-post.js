import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import uuidv4 from 'uuid/v4'


class NewPost extends Component {
  constructor(props) {
    super(props);
    this.submitData = this.submitData.bind(this);
    this.state = {
      id: uuidv4(),
      timestamp: Date.now(),
      title: '',
      body: '',
      author: '',
      category: '',
    }
  }

  componentDidMount() {
    if (this.props.posts !== undefined) {
      this.editPost();
    }
  }

  editPost() {
    const p = this.props.posts;
    this.setState({
      title: p.title,
      body: p.body,
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

 submitData() {
    console.log('Json: ', JSON.stringify(this.state));
   if (this.props.id === undefined) {
     console.log('New Post');
     this.props.newPost(JSON.stringify(this.state))
   }

   //this.props.editPost(JSON.stringify({this.state.title, this.state.body}))
 }

  render () {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <form onSubmit={this.submitData}>
              <div className="form-group">
                <label htmlFor="postTitle">Post Title</label>
                <input type="text" className="form-control" id="postTitle" onChange={(event) => this.onChange('title', event.target.value)} value={this.state.title}/>
              </div>
              <div className="form-group">
                <label htmlFor="postBody">Post</label>
                <textarea className="form-control" id="postBody" rows="10" onChange={(event) => this.onChange('body', event.target.value)} value={this.state.body}></textarea>
              </div>
              {this.props.id === undefined
                ? <div>
                    <div className="form-group">
                      <label htmlFor="postAuthor">Author</label>
                      <input type="text" className="form-control" id="postAuthor" onChange={(event) => this.onChange('author', event.target.value)} value={this.state.author}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="categoryChoice">Category</label>
                      <select onChange={(event) => this.onChange('category', event.target.value)} className="form-control" id="categoryChoice">
                        <option value="-">-</option>
                        {this.props.categories.map(cat =>
                          (<option key={cat} value={cat}>{cat}</option>)
                          )
                        }
                      </select>
                    </div>
                  </div>
                : null
              }
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
    posts: state.posts[id],
    categories: state.categories,
    id
  }
}

export default connect(mapStateToProps, actions)(NewPost);