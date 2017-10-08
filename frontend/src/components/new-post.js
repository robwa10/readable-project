import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost, getCategories } from "../actions";
import uuidv4 from 'uuid/v4'

class NewPost extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  renderTextField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input type="text" className="form-control" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  renderBody(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <textarea className="form-control" type="text" rows="15" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    const newValues =  {...values, id: uuidv4(), timestamp: Date.now()}
    this.props.createPost(newValues, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field
                label="Title"
                name="title"
                component={this.renderTextField}
              />
              <Field
                label="Body"
                name="body"
                component={this.renderBody}
              />
              <div className="row">
                <div className="col-12 col-md-6">
                  <Field
                    className="form-control"
                    label="Author"
                    name="author"
                    component={this.renderTextField}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label>Categories</label>
                  <Field
                    className="form-control"
                    name="category"
                    component="select">
                    <option />
                    {
                      this.props.categories.map(cat =>
                      (<option key={cat} value={cat}>{cat}</option>))
                    }
                  </Field>
                </div>
                </div>
              <button type="submit" className="btn btn-link">Submit</button>
              <Link to="/" className="btn btn-link">Cancel</Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Whatcha gonna call this?";
  }
  if (!values.body) {
    errors.body = "You gotta say something...";
  }
  if (!values.author) {
    errors.author = "We need a name, even if it's not yours.";
  }
  if (!values.category) {
    errors.categories = "Pick a category please.";
  }
  return errors;
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(mapStateToProps, { createPost, getCategories })(NewPost));
