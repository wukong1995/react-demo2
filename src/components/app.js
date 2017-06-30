'use strict';

import React, {
    Component
} from 'react';
import ReactDom from 'react-dom';

import Index from './index'
import Detail from './detail'
import List from './list'
import ReactColor from './react-color'

import { BrowserRouter, Route ,Switch,Redirect} from 'react-router-dom'

class App extends Component {
    render() {
        return (
          <div>
              <BrowserRouter>
                  <Switch>
                    <Route exact path="/" render={() => <Redirect to="/index" />} />
                    <Route path="/index" component={Index} />
                    <Route path="/list" component={List} />
                    <Route path="/detail" component={Detail} />
                    <Route path="/color" component={ReactColor} />
                    <Route path="/*" render={() => <Redirect to="/index" />} />
                  </Switch>
              </BrowserRouter>
          </div>
        )
    }
}

ReactDom.render(
  <App />,
  document.getElementById('app'))






