import React from 'react'
import ReactDom from 'react-dom'
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '@babel/polyfill'

import Header from './shared/Header'

import Index from './pages/Index'
import List from './pages/List'
import Add from './pages/Add'
import Redux from './pages/Redux'
import Simple from './pages/Simple'
import Sentence from './pages/Sentence'
import EditorPage from './pages/EditorPage'
import ReactColor from './pages/React-color'
import TableDemo from './pages/TableDemo'
import I18N from './pages/i18n'

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
            <Route exact path="/" render={() => <Redirect to="/index" />} />
            <Route path="/sentence" component={Sentence} />
            <Route path="/index" component={Index} />
            <Route path="/list" component={List} />
            <Route path="/add" component={Add} />
            <Route path="/redux" component={Redux} />
            <Route path="/simple" component={Simple} />
            <Route path="/color" component={ReactColor} />
            <Route path="/editor" component={EditorPage} />
            <Route path="/table" component={TableDemo} />
            <Route path="/i18n" component={I18N} />
            <Route path="/*" render={() => <Redirect to="/index" />} />
          </Switch>
        </ReactCSSTransitionGroup>
      </BrowserRouter>
    </div>
  )
}

ReactDom.render(
  <App />,
  document.getElementById('app')
)
