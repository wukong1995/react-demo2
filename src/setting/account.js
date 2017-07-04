import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Layout,Menu } from 'element-react'
import User from './components/user'
import { observer, inject } from 'mobx-react'

@inject( 'userinfo') @observer
class Account extends React.Component {
  componentWillMount() {
    this.props.userinfo.fetch();
  }

  render() {
    let user = this.props.userinfo.data;
    
    return (
      <div>
        <BrowserRouter basename="/setting">
          <Layout.Row gutter="24">
            <Layout.Col span="6" offset="6">
              <Menu defaultActive="1" className="el-menu-vertical-demo" theme="dark">
                <Menu.Item index="1">基本信息</Menu.Item>
                <Menu.Item index="2">姓名:{user.name}</Menu.Item>
                <Menu.Item index="2">电话:{user.telphone}</Menu.Item>
              </Menu>
            </Layout.Col>
            <Layout.Col span="6">
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/account" />} />
                <Route path="/account" component={User} />
                <Route path="/*" render={() => <Redirect to="/account" />} />
              </Switch>
            </Layout.Col>
          </Layout.Row>
        </BrowserRouter>
      </div>
    )
  }
}


export default Account
