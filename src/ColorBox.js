import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: 2}}>
          {this.props.opacity}

        </div>
      )
    } else {
      return (
        null
      )
    }
  }

}
