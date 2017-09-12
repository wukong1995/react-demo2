import React from 'react';
import Prototype from 'prop-types';
import { extend } from 'lodash';

class InputComponent extends React.Component {

  handleChange(e) {
    const value = Number(e.target.value);
    this.props.valueChange(value);
  }

  render () {
    return (
      <input type="number" value={this.props.value} onChange={(e) => this.handleChange(e)} />
    );
  }
}
InputComponent.propTypes = {
  valueChange: Prototype.func,
  value: Prototype.string
};

class TextComponent extends React.Component {
  render() {
    return (
      <p>{this.props.value}</p>
    );
  }
}
TextComponent.propTypes = {
  value: Prototype.string
};


class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 5,
      subtraction: 3,
      user: {
        name: 'wang',
        age: 20
      }
    };

    this.handleSum = this.handleSum.bind(this);
    this.handleSubtraction = this.handleSubtraction.bind(this);
  }
  handleSum(value) {
    this.setState({sum: value});
    // 使用lodash
    let user = extend({}, this.state.user, {age: value});
    this.setState({user: user});
  }
  handleSubtraction(value) {
    this.setState({subtraction: value});
  }


  render() {
    const result = this.state.sum - this.state.subtraction;

    return (
      <div>
        和：
        <InputComponent
          value={this.state.sum}
          valueChange={this.handleSum} />
        被减数：
        <InputComponent
          value={this.state.subtraction}
          valueChange={this.handleSubtraction} />
        结果：
        <TextComponent value={result} />
        <div>
          <p>姓名：{this.state.user.name}</p>
          <p>年龄：{this.state.user.age}</p>
        </div>
      </div>
    );
  }
}

export default Add;
