// When a user types a query, the list of Gifs should display the 10 first results the giphy-api returns.
// When a user clicks on a gif from the list, it should appear on the main scene on the left.

import React, { Component } from 'react';
import giphy from 'giphy-api'; // yarn add giphy-api

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = 'n6SHnre7KUeRM8AvaFzIywCedX7MP8SJ';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    };
  }

  search = (query) => {
    // API call
    giphy({ apiKey: GIPHY_API_KEY, https: true }).search({
      q: query,
      rating: "g",
      limit: 15
    }, (err, result) => {
      // console.log(result);
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
