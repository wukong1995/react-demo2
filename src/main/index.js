import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu } from 'element-react';
import 'element-theme-default';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Layout.Row gutter="12">
          <Layout.Col span="5" offset="2">
            <Menu theme="dark" className="el-menu-demo" mode="horizontal">
              <Menu.Item index="1">Project</Menu.Item>
            </Menu>
          </Layout.Col>
          <Layout.Col span="5">
            <Menu theme="dark" className="el-menu-demo" mode="horizontal" >
              <Menu.Item index="1">登录</Menu.Item>
              <Menu.Item index="2">注册</Menu.Item>
            </Menu>
          </Layout.Col>
        </Layout.Row>
        <div>
          <Link to="/list">list</Link>
        </div>
        <div>
          <Link to="/detail">detail</Link>
        </div>
        <div>
          <Link to="/color">color</Link>
        </div>
        <div>
          <Link to="/setting">setting</Link>
        </div>
      </div>
    );
  }
}

export default Index;
