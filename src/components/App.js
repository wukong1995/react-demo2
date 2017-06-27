'use strict';


import React, {
    Component
} from 'react';
import ReactDom from 'react-dom';


import Detail from './Detail'
import List from './List'

import {
    Router,
    Route,
    hashHistory
} from 'react-router';


class App extends Component {
    render() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div>React Router: </div>
                <div><a href="#/list">list page</a></div>
                <div><a href="#/detail">detail page</a></div>
            </div>
        );
    }
};


//最终渲染
ReactDom.render((
    <Router history={hashHistory}>
        <Route path='/' component={App}></Route>
        <Route path='/list' component={List} />
        <Route path='/detail' component={Detail} />
    </Router>
), document.getElementById('app'));