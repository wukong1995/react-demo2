import { combineReducers } from 'redux';

const todos = (state = 0, action) => {
  switch (action.type) {
  case 'INCREASE': return state + 1;
  case 'DISCREASE': return state - 1;
  default: return state;
  }
};

const todoSimple = combineReducers({
  todos
});

export default todoSimple;
