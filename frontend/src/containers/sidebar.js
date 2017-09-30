import React, { Component } from 'react';
import { connect } from 'react-redux';
import { recieveCategories } from '../actions';
import * as api from '../API_Calls';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories() {
    api.getPostsOrCategories('categories').then((data) => {
      this.props.recieveCategories(data); // Pass to categories-actions
    })
  }

  render() {
  const categories = this.props.categories
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <div>
            <h4>Filter</h4>
            <div className="row">
            {categories.map(cat => {
              const c = cat[0].charAt(0).toUpperCase() + cat[0].slice(1);
              return (
                <Link
                  key={c}
                  to={`/${c}`}
                  role="button"
                  className="p-2 col-12 col-md-6"
                >{c}</Link>
                )
              })}
              <Link
                to='/'
                role="button"
                className="p-2 col-12 col-md-6"
              >All Posts</Link>
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

export default connect(mapStateToProps, { recieveCategories })(Sidebar);
