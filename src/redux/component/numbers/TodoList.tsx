import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

export default class TodoList extends React.PureComponent {
  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo, index) => (
            <Todo
              key={index}
              {...todo}
              onClick={() => this.props.onTodoClick(index)}
            />
          ))
        }
      </ul>
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}
