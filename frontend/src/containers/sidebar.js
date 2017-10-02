import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../actions';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <div>
            <h4>Filter</h4>
            <div className="row">
            {this.props.categories.map(cat => {
              const c = cat[0];
              return (
                <Link
                  key={c}
                  to={`/${c}`}
                  role="button"
                  className="p-2 col-12 col-md-6"
                >{c.charAt(0).toUpperCase() + c.slice(1)}</Link>
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

export default connect(mapStateToProps, { getCategories })(Sidebar);
