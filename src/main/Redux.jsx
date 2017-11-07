import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Numbers from '../redux/component/numbers/Numbers';
import todoNumbers from '../redux/reducer/numbers';

const store = createStore(todoNumbers);

const Redux = () => {
  return (
    <div className="u-container redux">
      <Provider store={store}>
        <Numbers />
      </Provider>
    </div>
  );
};

export default Redux;
