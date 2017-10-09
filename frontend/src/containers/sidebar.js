import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories, sortPosts } from '../actions';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.postSort = this.postSort.bind(this)
  }

  componentDidMount() {
    this.props.getCategories();
  }

  postSort(filter) {
    this.props.sortPosts(filter);
  }

  render() {
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <div>
            <h4>Filter</h4>
            <div className="row">
            {this.props.categories.map(c => {
              return (
                <Link
                  key={c}
                  to={`/${c}`}
                  role="button"
                  className="p-2 col-12 col-sm-6"
                >{c.charAt(0).toUpperCase() + c.slice(1)}</Link>
                )
              })}
              <Link
                to='/'
                role="button"
                className="p-2 col-12 col-sm-6"
              >All Posts</Link>
            </div>
          </div>
          <div className="mt-4">
            <h4>Sort by Author</h4>
            <div className="row">
              <button onClick={() => this.postSort('asc')} className="btn btn-link mt-3 col-6">Ascending</button>
              <button onClick={() => this.postSort('dsc')} className="btn btn-link mt-3 col-6">Descending</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
})

export default connect(mapStateToProps, { getCategories, sortPosts })(Sidebar);
