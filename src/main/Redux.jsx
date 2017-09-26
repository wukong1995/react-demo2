import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Numbers from '../redux/component/numbers/Numbers';
import todoNumbers from '../redux/reducer/numbers';
import { Link } from 'react-router-dom';

let store = createStore(todoNumbers);

class Redux extends React.Component {
  render() {
    return (
      <div className="container redux">
        <Provider store={store}>
          <Numbers />
        </Provider>
      </div>
    );
  }
};

export default Redux;
