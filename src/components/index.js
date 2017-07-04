import React, {
    Component
} from 'react'

import { Link } from 'react-router-dom'

import { Layout,Menu } from 'element-react'
import 'element-theme-default'

class Index extends Component {
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
      </div>
    );
  }
};

export default Index;