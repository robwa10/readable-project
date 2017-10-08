import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { editPost, getSinglePost } from "../actions";

class EditPost extends Component {
  componentDidMount() {
    this.props.getSinglePost(this.props.match.params.id);
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
        <textarea className="form-control" type="text" rows="5" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    const newValues =  {...values }
    this.props.editPost(this.props.match.params.id, newValues, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
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
                name="body"
                value="body"
                component={this.renderBody}
              />
              <button type="submit" disabled={pristine || submitting } className="btn btn-link">Submit</button>
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
  return errors;
}

EditPost = reduxForm({
  validate,
  form: "EditPost",
})(EditPost);

EditPost = connect(
  (state, { match }) => ({
    initialValues: state.posts[match.params.id],
  }),
  { editPost, getSinglePost }
)(EditPost);

export default EditPost;
