import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = (props) => (
    <Link to={`/${props.filter}`}>
      <button
        id={props.filter}
        type="button"
        className="btn btn-link">
        {props.filter}
      </button>
    </Link>
  )

export default ButtonLink;
