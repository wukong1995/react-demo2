import React from 'react';
import { SketchPicker } from 'react-color';

class ReactColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: '#000',
    };
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
  }

  handleChangeComplete(color) {
    this.setState({ background: color.hex });
  }

  render() {
    const style = {
      backgroundColor: this.state.background
    };

    return (
      <div style={style}>
        <SketchPicker
          color={ this.state.background }
          onChangeComplete={ this.handleChangeComplete }
        />
      </div>
    );
  }
}

export default ReactColor;
