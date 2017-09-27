import { combineReducers } from 'redux';

// data
const todos = (state = [], action) => {
  switch (action.type) {
  case 'INCREASE':
    return [
      ...state,
      {
        text: action.text,
        state: true
      }
    ];
  case 'DISCREASE':
    return [
      ...state.slice(0, action.index),
      Object.assign({}, state[action.index], {
        state: false
      }),
      ...state.slice(action.index + 1)
    ];
  default: return state;
  }
};

// data function
const filter = (state = 'ALL', action) => {
  switch (action.type) {
  case 'FILTER':
    return action.filter;
  default:
    return state;
  }
};

const todoSimple = combineReducers({
  todos,
  filter
});

export default todoSimple;
