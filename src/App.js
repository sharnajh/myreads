import React, { Component } from 'react';
import Shelves from './Shelves';
import * as BooksAPI from './BooksAPI';

class App extends Component {
    state = {
      books: [],
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
      <div>
        <h1>MyReads</h1>
          <Shelves 
            books={this.state.books}
            onMove={this.handleMove}  
          />
      </div>
    )
  }
}

export default App;