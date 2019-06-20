import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Item extends React.PureComponent {
  render() {
    const { item } = this.props

    console.log('render call', item)
    return (
      <div>
        {item}
      </div>
    )
  }
}

const style = {color: '#ddd'}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: ['hello', 'world', 'click', 'me'] };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items
    newItems.push(prompt('Enter some text'));
    this.setState({ items: newItems });
  }

  handleRemove(i) {
    const newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }

  render() {

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        {/* <ReactCSSTransitionGroup
          transitionName="switch"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        > */}
          {
            this.state.items.map((item) => (
              <Item key={item} item={item} style={style} />
            ))

          }
        {/* </ReactCSSTransitionGroup> */}
      </div>
    );
  }
}

export default List;
