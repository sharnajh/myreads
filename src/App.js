import React, { Component } from 'react';
import Shelves from './Shelves';
import * as BooksAPI from './BooksAPI';
import { Route, Link } from 'react-router-dom';
import SearchPage from './SearchPage';
import './css/app.css';
import Back from './icons/left.svg'

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

    handleMove = (book,shelf) => {
      BooksAPI.update(book, shelf).then(response => {
        book.shelf = shelf;
        this.setState(prevState => ({
          books: prevState.books
            .filter(b => b.id !== book.id)
            .concat(book)
        }));
      });
    };

  render() {
    return (
      <div id="maincontainer">
        <div id="header">
        <Route path='/search' render={() => (<Link to="/"><img id="back" src={Back} alt="back" /></Link>)} />
        <Route exact path='/' render={() => (<div id="empty"></div>)} />
          <a href="/">
            <h1>MyReads</h1>
          </a>
        <div id="empty"></div>
        </div>
          <Route exact path='/' render={(props) => (
            <div>
            <Shelves 
              books={this.state.books}
              onMove={this.handleMove}
              shelves={this.state.shelves}  
            />
            <form action="/search">
            <button 
              id="search-btn"
              type="submit">
                +
            </button>
          </form>
            </div>
          )} />
          <Route path='/search' render={() => (
            <SearchPage 
            shelves={this.state.shelves}
            onMove={this.handleMove}
            />
          )} />
      </div>
    )
  }
}

export default App;