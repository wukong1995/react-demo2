import React from 'react';
import { Link } from 'react-router-dom';


class Index extends React.Component {
  render() {
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
  }
}

export default Index;
