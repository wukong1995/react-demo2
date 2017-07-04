import React from 'react';
import { observer, inject } from 'mobx-react'

@inject( 'userinfo') @observer

class User extends React.Component {
  save() {
    // 发送ajax请求
  }

  render() {
    let user = this.props.userinfo.user;

    return (
      <div>
        <div>
          <label>姓名：</label>
          <input type="text" value={user.name}/>
        </div>
        <div>
          <label>电话：</label>
          <input type="text" value={user.telphone}/>
        </div>
        <div>
          <button type="button" onClick={this.save}>确定</button>
        </div>
      </div>
    )
  }
}


export default User