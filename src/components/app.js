'use strict';

import React, {
    Component
} from 'react';
import ReactDom from 'react-dom';

import Index from './index'
import Detail from './detail'
import List from './list'
import ReactColor from './react-color'
import { Grid, Row, Col } from 'react-flexbox-grid';

import { BrowserRouter, Route ,Switch,Redirect,Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
          <div><Link to="/">首页</Link></div>
            <div><Link to="/list">列表页</Link></div>
            <div><Link to="/detail">详情页</Link></div>
            <div><Link to="/color">react-color</Link></div>
          </Col>
          <Col xs={18} sm={18} md={18} lg={18}>
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/index" />} />
                <Route path="/index" component={Index} />
                <Route path="/list" component={List} />
                <Route path="/detail" component={Detail} />
                <Route path="/color" component={ReactColor} />
                <Route path="/*" render={() => <Redirect to="/index" />} />
              </Switch>
          </Col>
        </Row>
      </BrowserRouter>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app'))






