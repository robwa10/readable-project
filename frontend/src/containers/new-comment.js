import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createComment } from "../actions";
import uuidv4 from 'uuid/v4'

class NewComment extends Component {
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
        <textarea className="form-control" type="text" rows="5" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  cancelEdit() {
    this.props.history.goBack();
  }

  onSubmit(values) {
    const parentId = this.props.match.params.id
    const newValues =  {...values, id: uuidv4(), timestamp: Date.now(), parentId}
    this.props.createComment(newValues, () => {
      this.cancelEdit();
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
                label="Body"
                name="body"
                component={this.renderBody}
              />
              <Field
                className="form-control"
                label="Author"
                name="author"
                component={this.renderTextField}
              />
              <button type="submit" disabled={pristine || submitting } className="btn btn-link">Submit</button>
              <button onClick = {() => this.cancelEdit.bind(this)} type="submit" className="btn btn-link">Cancel</button>
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
  if (!values.author) {
    errors.author = "We need a name, even if it's not yours.";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "NewComment"
})(connect(null, { createComment })(NewComment));
