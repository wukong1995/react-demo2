import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import todoSimple from '../redux/reducer/simple';
import Simple1 from '../redux/component/Simple1';
import Simple2 from '../redux/component/Simple2';


const store = createStore(todoSimple);

const Simple = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/simple">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/simple1" />} />
          <Route path="/simple1" component={Simple1} />
          <Route path="/simple2" component={Simple2} />
          <Route path="/*" render={() => <Redirect to="/simple1" />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Simple;
