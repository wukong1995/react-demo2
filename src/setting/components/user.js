import React from 'react';
import { observer, inject } from 'mobx-react'

@inject( 'userinfo') @observer
class User extends React.Component {

  saveChange() {
    this.props.userinfo.change();
  }

  textChange (name, value) {
    this.props.userinfo.user[name] = value;
  }

  componentWillMount() {
    this.props.userinfo.fetch();
  }

  render() {
    let user = this.props.userinfo.user;

    return (
      <div>
        <div>
          <label>姓名：</label>
          <input type="text" value={user.name}
          onChange={e => this.textChange('name', e.target.value)} />
        </div>
        <div>
          <label>电话：</label>
          <input type="text" value={user.telphone}
          onChange={e => this.textChange('telphone', e.target.value)} />
        </div>
        <div>
          <button type="button" onClick={this.saveChange(this)}>确定</button>
        </div>
      </div>
    );
  }
}


export default User;