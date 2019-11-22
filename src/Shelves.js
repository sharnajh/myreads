import React, { Component } from 'react';
import Shelf from './Shelf';
import * as BooksAPI from './BooksAPI';

class Shelves extends Component {
    state = {
        shelves: {
            currentlyReading: [],
            wantToRead: [],
            read: []
        }
    }

    handleMove = (values) => {
        BooksAPI.update(values.book, values.shelf)
          .then((res) => (
            console.log(res),
            this.setState((prev) => ({
                shelves: res
            }))
          ))
      }
    
    render() {
        const { books } = this.props
        const { shelves } = this.state
        return (
            <div>
            {Object.keys(shelves).map((shelf, id) => (
                <Shelf 
                    key={id} 
                    books={books} 
                    bookshelf={shelf} 
                    onMove={this.handleMove} 
                />
              ))}
            </div>
        )
    }
}

export default Shelves