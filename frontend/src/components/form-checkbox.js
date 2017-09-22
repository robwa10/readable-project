import React from 'react';

const FormCheckbox = (props) => {
  return (
    <div className="form-check text-left">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox" value=""/>
          <p>{props.text}</p>
      </label>
    </div>
  );
}

export default FormCheckbox;
