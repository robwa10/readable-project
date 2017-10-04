import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
    <div className="header container-fluid">
      <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-uppercase text-center">anonymous posting board</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4 className="text-muted text-center">Sticks and stones may break my bones...</h4>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );

export default Header;
