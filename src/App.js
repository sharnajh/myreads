import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class App extends Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        console.log(books)
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    const { books } = this.state
    return (
      <div>
        <h1>MyReads</h1>
          <h2>Currently Reading</h2>
            <ul>
              {books.filter((book) => book.shelf === "currentlyReading").map((book) => (
                <li key={book.id}>{book.title}</li>
              ))}
            </ul>

          <h2>Want to Read</h2>
            <ul>
              {books.filter((book) => book.shelf === "wantToRead").map((book) => (
                <li key={book.id}>{book.title}</li>
              ))}
            </ul>
          <h2>Read</h2>
            <ul>
              {books.filter((book) => book.shelf === "wantToRead").map((book) => (
                <li key={book.id}>{book.title}</li>
              ))}
            </ul>
      </div>
    )
  }
}

export default App;
