import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h2 className="header__title">
        <Link to="/">Project</Link>
      </h2>
    </div>
  );
};

export default Header;
