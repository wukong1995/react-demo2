import React from 'react';
import { Link } from 'react-router-dom';


const Index = () => {
  return (
    <div className="index container">
      <div>
        <Link to="/list">list</Link>
      </div>
      <div>
        <Link to="/detail">detail</Link>
      </div>
      <div>
        <Link to="/color">color</Link>
      </div>
      <div>
        <Link to="/setting">setting</Link>
      </div>
      <div>
        <Link to="/add">add</Link>
      </div>
      <div>
        <Link to="/editor">editor</Link>
      </div>
    </div>
  );
};

export default Index;
