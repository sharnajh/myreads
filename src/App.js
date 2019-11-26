import React, { Component } from "react";
import Shelves from "./Shelves";
import * as BooksAPI from "./BooksAPI";
import { Route, Link, Switch, HashRouter } from "react-router-dom";
import SearchPage from "./SearchPage";
import "./css/app.css";
import Back from "./icons/left.svg";

class App extends Component {
  state = {
    books: [],
    shelves: [
      { value: "currentlyReading", title: "Currently Reading" },
      { value: "wantToRead", title: "Want to Read" },
      { value: "read", title: "Read" }
    ],
    error: false
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState({ books }))
      .catch(() => this.setState({ error: true }));
  }

  handleMove = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(response => {
        book.shelf = shelf;
        this.setState(prevState => ({
          books: prevState.books.filter(b => b.id !== book.id).concat(book)
        }));
      })
      .catch(() => this.setState({ error: true }));
  };

  render() {
    if (this.state.error) {
      return <p>Please try again later.</p>;
    }
    return (
      <div id="maincontainer">
        <div id="header">
          <Switch>
            <Route
              path={'/search'}
              render={() => (
                <Link to="/">
                  <img id="back" src={Back} alt="back" />
                </Link>
              )}
            />
            <Route exact path="/" render={() => <div id="empty"></div>} />
          </Switch>
          <Link to="/">
            <h1>MyReads</h1>
          </Link>
          <div id="empty"></div>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <div>
                <Shelves
                  books={this.state.books}
                  onMove={this.handleMove}
                  shelves={this.state.shelves}
                />
                <Link to={'/search'}>
                  <button id="search-btn" type="submit">
                    +
                  </button>
                </Link>
              </div>
            )}
          />
          <Route
            path={'/search'}
            render={() => (
              <SearchPage
                shelves={this.state.shelves}
                onMove={this.handleMove}
                shelvedBooks={this.state.books}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
