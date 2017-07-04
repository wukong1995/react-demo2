'use strict';

import React, {
    Component
} from 'react';
import ReactDom from 'react-dom';

import Index from './index'
import Detail from './detail'
import List from './list'
import ReactColor from './react-color'
import UserSetting from '../setting'

import { BrowserRouter, Route ,Switch,Redirect,Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/index" />} />
          <Route path="/index" component={Index} />
          <Route path="/list" component={List} />
          <Route path="/detail" component={Detail} />
          <Route path="/color" component={ReactColor} />
          <Route path="/setting" component={UserSetting} />
          <Route path="/*" render={() => <Redirect to="/index" />} />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app'))






