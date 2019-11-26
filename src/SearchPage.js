import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI.js";
import Shelf from "./Shelf";

class SearchPage extends Component {
  state = {
    query: "",
    results: [],
    queryError: false,
    apiError: false
  };

  // Filters the search results so that
  // the shelf is selected if applicable.
  filterBooks = books => {
    books.forEach(book => {
      for (let b of this.props.shelvedBooks) {
        if (book.id === b.id) {
          book.shelf = b.shelf;
          break;
        } else {
          book.shelf = "none";
        }
      }
    });
    return books;
  };

  // If there are no shelved books in props.
  noShelvedBooks = books => {
    books.forEach(book => {
      book.shelf = "none";
    });
    return books;
  };

  searchResults = q => {
    BooksAPI.search(q.trim())
    .then(books => {
      if (q === this.state.query) {
        if (books && books.length > 0) {
          this.setState({
            results:
              this.props.shelvedBooks.length > 0
                ? this.filterBooks(books)
                : this.noShelvedBooks(books),
            queryError: false
          });
        } else {
          this.setState({ results: [], queryError: true });
        }
      }
    })
    .catch(() => this.setState({ apiError: true }));
  };
  updateQuery = e => {
    this.setState(() => ({
      query: e
    }));
    if (e) {
      this.searchResults(e);
    } else {
      this.setState({ results: [], queryError: false });
    }
  };
  render() {
    const { query, results, queryError, apiError } = this.state;
    const { shelves } = this.props;
    return (
      <div id="search-pg">
        <input
          id="search-bar"
          type="text"
          value={query}
          placeholder="Search for books"
          onChange={e => this.updateQuery(e.target.value)}
        />
        <div className="shelves">
          <div className="shelf">
            {results && results.length > 0 && <h3>{results.length} Results</h3>}
            <div className="shelf-books">
              <div className="imgcont">
                <Shelf
                  shelf="Search Results"
                  books={results}
                  shelves={shelves}
                  onMove={this.props.onMove}
                />
              </div>
            </div>
          </div>
        </div>

        {queryError && (
          <h3>Your search - "{query}" - did not match with any books.</h3>
        )}
        {apiError && (
          <h3>Please try again later</h3>
        )}
      </div>
    );
  }
}

export default SearchPage;
