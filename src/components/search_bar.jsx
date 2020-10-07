import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    console.log(event.target.value);
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        placeholder="type something"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
