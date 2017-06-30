// import React from 'react';
// import { SketchPicker } from 'react-color';

// class ReactColor extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       background: '#fff'
//     }

//     this.handleChangeComplete = this.handleChangeComplete.bind(this);
//   }

//   handleChangeComplete(color) {
//     this.setState({ background: color.hex });
//   }

//   render() {
//     return (
//       <SketchPicker
//         color={ this.state.background }
//         onChangeComplete={ this.handleChangeComplete }
//       />
//     );
//   }
// }
//
import React from 'react';
import { SketchPicker } from 'react-color';

class ReactColor extends React.Component {
  state = {
    background: '#fff',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
      <SketchPicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
    );
  }
}

export default ReactColor;