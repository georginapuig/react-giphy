import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    if (!this.props.id) {
      return null;                            
    }

    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} className="gif" alt="" onClick={this.handleClick} />
    );
  }
}

export default Gif;
