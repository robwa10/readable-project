import React from 'react';

const DropDown = (props) => {
  return (
    <div className="form-group">
      <label style={props.labelStyle}>{props.label}</label>
      <select className="form-control" id={props.id} onChange={props.onChange}>
        {props.options.map((option, index) => (
          <option key={option[index]}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
