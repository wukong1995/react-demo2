import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from './shared/Header';
import Simple1 from './redux/component/Simple1';
import Simple2 from './redux/component/Simple2';

import todoSimple from './redux/reducer/simple';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(todoSimple);

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <ReactCSSTransitionGroup
          transitionName="switch"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <Switch>
            <Route path="/simple1" component={Simple1} />
            <Route path="/simple2" component={Simple2} />
          </Switch>
        </ReactCSSTransitionGroup>
      </BrowserRouter>
    </div>
  );
};

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
