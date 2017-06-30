'use strict';

import React, {
    Component
} from 'react';
import ReactDom from 'react-dom';


import Detail from './Detail.jsx'
import List from './List.jsx'
import ReactColor from './ReactColor.jsx'

import { BrowserRouter, Route, Link ,Switch,Redirect} from 'react-router-dom'

class App extends Component {
    render() {
        return (
          <div>
            <div>
                <BrowserRouter basename="/app">
                    <Switch>
                      <Route exact path="/" render={() => <Redirect to="/list" />} />
                      <Route path="/list" component={List} />
                      <Route path="/detail" component={Detail} />
                      <Route path="/color" component={ReactColor} />
                      <Route path="/*" render={() => <Redirect to="/profile" />} />
                    </Switch>
                </BrowserRouter>
            </div>
          </div>
        )
    }
}

ReactDom.render(
  <App />,
  document.getElementById('app'))






