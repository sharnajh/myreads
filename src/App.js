import React, { Component } from 'react';
import Shelves from './Shelves';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import './css/app.css';

class App extends Component {
    state = {
      books: [],
      shelves: [
        { value: "currentlyReading", title: "Currently Reading" },
        { value: "wantToRead", title: "Want to Read" },
        { value: "read", title: "Read" }
    ]
    }

    componentDidMount() {
      BooksAPI.getAll().then(books => this.setState({ books }));
    }

    handleMove = (values) => {
      BooksAPI.update(values.book, values.shelf).then(response => {
        values.book.shelf = values.shelf;
        this.setState(prevState => ({
          books: prevState.books
            .filter(book => book.id !== values.book.id)
            .concat(values.book)
        }));
      });
    };

  render() {
    return (
      <div id="maincontainer">
        <a href="/">
          <h1>MyReads</h1>
        </a>
          <form action="/search">
            <button type="submit">Search</button>
          </form>
          <Route exact path='/' render={() => (
            <Shelves 
            books={this.state.books}
            onMove={this.handleMove}
            shelves={this.state.shelves}  
            />
          )} />
          <Route path='/search' render={() => (
            <SearchPage 
            shelves={this.state.shelves}
            onMove={this.handleMove}
            />
          )} />
        <h5>Coded with ♡</h5>
      </div>
    )
  }
}

export default App;