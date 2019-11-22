import React, { Component } from 'react';
import Shelves from './Shelves';
import * as BooksAPI from './BooksAPI';

class App extends Component {
  state = {
    books: [],
    shelves: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState((prev) => ({
          books: books,
          shelves: [
            {
              name: "Currently Reading",
              books: books.filter((book) => book.shelf === "currentlyReading") 
            },
            {
              name: "Want to Read",
              books: books.filter((book) => book.shelf === "wantToRead") 
            },
            {
              name: "Read",
              books: books.filter((book) => book.shelf === "read") 
            }
          ]
        }))
      })
  }

  render() {
    const { books, shelves } = this.state
    return (
      <div>
        <h1>MyReads</h1>
        <Shelves books={books} shelves={shelves} />
      </div>
    )
  }
}

export default App;
