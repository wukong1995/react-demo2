import React from 'react';
import PropTypes from 'prop-types';
import wrapper from './wrapper';
import { Link } from 'react-router-dom';



import { add, changeState, setFilter } from '../action/simple';

const Simple2 = (props) => {
  const { dispatch, todos } = props;

  return (
    <div>
      <p>Simple2</p>
      <Link to="/simple1">go simple1</Link>
      <h2>List:</h2>
      <ul>
        {
          todos.map((todo, index) => {
            if (todo.state) {
              return <li key={index} onClick={() => dispatch(changeState(index))}>可点击：<strong>{todo.text}</strong></li>;
            }
            return <li key={index} >{todo.text}</li>;
          })
        }
      </ul>
    </div>
  );
};

Simple2.propTypes = {
  dispatch: PropTypes.func,
  todos: PropTypes.number
};


export default wrapper(Simple2);
