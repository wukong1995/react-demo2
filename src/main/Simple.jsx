import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Simple1 from '../redux/component/Simple1';
import todoSimple from '../redux/reducer/simple';

const store = createStore(todoSimple);

const Simple = () => {
  return (
    <div className="container redux">
      <Provider store={store}>
        <Simple1 />
      </Provider>
    </div>
  );
};

export default Simple;
