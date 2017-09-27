import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { add, changeState, setFilter } from '../action/simple';

const Simple2 = (props) => {
  const { dispatch, todos } = props;

  return (
    <div>
      <p>Simple2</p>
      <button onClick={() => { dispatch(add('aaa')); }}>Add aaa</button>

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
      <h2>Filter:</h2>
      <a href="javascript:;" onClick={ () => { dispatch(setFilter('ALL')); }}>All&nbsp;&nbsp;</a>
      <a href="javascript:;" onClick={ () => { dispatch(setFilter('FALSE')); }}>false&nbsp;&nbsp;</a>
      <a href="javascript:;" onClick={ () => { dispatch(setFilter('TRUR')); }}>true&nbsp;&nbsp;</a>
    </div>
  );
};

Simple2.propTypes = {
  dispatch: PropTypes.func,
  todos: PropTypes.number
};

const getFilter = (todos, filter) => {
  switch (filter) {
  case 'ALL': return todos;
  case 'TRUR':
    return todos.filter(todo => todo.state);
  case 'FALSE':
    return todos.filter(todo => !todo.state);
  default: return todos;
  }
};

const numbers = (state) => {
  const { todos, filter } = state;
  return {
    todos: getFilter(todos, filter),
    filter
  };
};

export default connect(numbers)(Simple2);
