import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class App extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll
  }
  render() {
    return (
      <div>
        <CurrentlyReading />
        <WantToRead />
        <Read />
        <SearchBooks />
      </div>
    );
  }
}

export default App;
