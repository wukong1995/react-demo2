import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu } from 'element-react';
import 'element-theme-default';

class Index extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="wrapper">
          <div className="wrapper__left">
            <Menu theme="dark" className="el-menu-demo" mode="horizontal">
              <Menu.Item index="1">Project</Menu.Item>
            </Menu>
          </div>
          <div className="wrapper__right">
            <Menu theme="dark" className="el-menu-demo" mode="horizontal" >
              <Menu.Item index="1">登录</Menu.Item>
              <Menu.Item index="2">注册</Menu.Item>
            </Menu>
          </div>
        </div>
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
         <div>
          <Link to="/add">add</Link>
        </div>
      </div>
    );
  }
}

export default Index;
