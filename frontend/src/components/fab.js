import React from 'react';
import { Link } from 'react-router-dom';

const Fab = (props) => {
  return (
    <Link>
      <div className="fab-button-container">
        <div className="container">
          <div className="fab-button-row">
            <button className="fab-button" type="button" name="add post"><p>+</p></button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Fab;
