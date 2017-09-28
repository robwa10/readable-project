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
            {categories.map(cat => {
              const c = cat[0];
              return (
                <Link key={c} to={`/${c}`}>
                  <button
                    id={c}
                    type="button"
                    className="btn btn-link">
                    {c}
                  </button>
                </Link>
                )
              })}
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
