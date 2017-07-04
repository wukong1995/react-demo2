import { observable, runInAction, action } from 'mobx';
import $ from 'jquery';

class Store {
  @observable user = {
    name: 'test',
    telphone: '11111111111'
  }

  @observable data = {}

  @action fetch = () => {
    $.ajax({
      url: '/data/user.json',
      dataType: 'json'
    })
    .done(result => {

      // 这里打印没效果？？？？
      console.log(result)

      runInAction(() => {

        this.data = result.user;
        this.user = result.user;
      });
    });
  }
}

const userinfo = new Store();

export default userinfo;