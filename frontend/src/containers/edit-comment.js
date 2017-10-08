import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { editComment, getSingleComment } from "../actions";

class EditComment extends Component {
  componentDidMount() {
    this.props.getSingleComment(this.props.match.params.id);
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
    const newValues =  {...values, timestamp: Date.now()}
    this.props.editComment(this.props.match.params.id, newValues, () => {
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
                name="body"
                value='body'
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
  if (!values.body) {
    errors.body = "You gotta say something...";
  }
  return errors;
}

EditComment = reduxForm({
  validate,
  form: "EditComment",
})(EditComment);

EditComment = connect(
  (state, { match }) => ({
    initialValues: state.comments[match.params.id],
  }),
  { editComment, getSingleComment }
)(EditComment);

export default EditComment;
