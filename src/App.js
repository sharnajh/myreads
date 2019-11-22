import React, { Component } from 'react';
import Shelves from './Shelves';
import * as BooksAPI from './BooksAPI';

class App extends Component {
    state = {
      books: [],
    }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState((prev) => ({
          books
        }))
      })
  }

  render() {
    return (
      <div>
        <h1>MyReads</h1>
          <Shelves 
            books={this.state.books}  
          />
      </div>
    )
  }
}

export default App;