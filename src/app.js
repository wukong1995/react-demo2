'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import Index from './main/index';
import Detail from './main/detail';
import List from './main/list';
import Add from './main/add';
import ReactColor from './main/react-color';

import { BrowserRouter, Route , Switch, Redirect } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ReactCSSTransitionGroup
          transitionName="switch"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/index" />} />
            <Route path="/index" component={Index} />
            <Route path="/list" component={List} />
            <Route path="/add" component={Add} />
            <Route path="/detail" component={Detail} />
            <Route path="/color" component={ReactColor} />
            <Route path="/*" render={() => <Redirect to="/index" />} />
          </Switch>
        </ReactCSSTransitionGroup>
      </BrowserRouter>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
);
