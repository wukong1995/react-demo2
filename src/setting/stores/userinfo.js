import { observable, runInAction, action } from 'mobx';
import $ from 'jquery';

class Store {
  @observable user = {
    name: '',
    telphone: ''
  }

  @observable data = {}

  @action fetch = () => {
    $.ajax({
      url: '/data/user.json',
      dataType: 'json',
    })
    .done(data => {
      this.user = data.user;
      this.data = data.user;
    })
    .fail(xhr => {
      console.log('error');
    })
  }

  @action change = () => {
    this.data.name = "change";
    
  }
}

const userinfo = new Store();

export default userinfo;