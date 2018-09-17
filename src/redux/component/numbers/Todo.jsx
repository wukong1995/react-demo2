import React from 'react';
import PropTypes from 'prop-types';

export default class Todo extends React.PureComponent {
  render() {
    console.log('render call', this.props.text);

    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
        }}
      >
        {this.props.text}
      </li>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}
