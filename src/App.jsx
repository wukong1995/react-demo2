import React from 'react';
import ReactDom from 'react-dom';
import Header from './shared/Header';

import Index from './main/Index';
import Detail from './main/Detail';
import List from './main/List';
import Add from './main/Add';
import Redux from './main/Redux';
import EditorPage from './main/EditorPage';
import ReactColor from './main/React-color';

import { BrowserRouter, Route , Switch, Redirect } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
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
              <Route path="/redux" component={Redux} />
              <Route path="/detail" component={Detail} />
              <Route path="/color" component={ReactColor} />
              <Route path="/editor" component={EditorPage} />
              <Route path="/*" render={() => <Redirect to="/index" />} />
            </Switch>
          </ReactCSSTransitionGroup>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
);
