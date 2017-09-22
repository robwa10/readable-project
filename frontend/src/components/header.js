import React from 'react';

const Header = (props) => {
  return (
    <div className="header container-fluid">
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
    </div>
  );
}

export default Header;
