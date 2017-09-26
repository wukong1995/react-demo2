import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Simple1 = (props) => {
  const { dispatch, todos } = props;

  return (
    <div>
      <button onClick={() => { dispatch({ type: 'INCREASE' }); }}>增加</button>
      <input type="text" value={todos} />
      <button onClick={() => { dispatch({ type: 'DISCREASE' }); }}>减少</button>
    </div>
  );
};

Simple1.propTypes = {
  dispatch: PropTypes.func,
  todos: PropTypes.number
};

const numbers = (state) => {
  return state;
};

export default connect(numbers)(Simple1);
