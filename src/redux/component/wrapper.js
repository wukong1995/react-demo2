import React from 'react';
import { connect } from 'react-redux';

const wrapper = (Component) => {
  return connect(numbers)(Component)
}

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

export default wrapper;
