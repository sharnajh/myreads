import React, { Component } from 'react';
import ChangeShelfButton from './ChangeShelfButton'

class Book extends Component {
    render() {
        const { book } = this.props
        console.log(book)
        return(
            <div>
                <img src={book.imageLinks.thumbnail} alt={book.title} />
                <h4>{book.title}</h4>
                <h5>By {book.authors.join(', ')}</h5>
                <ChangeShelfButton
                    book={book}
                    onMove={this.props.onMove}
                    shelves={this.props.shelves}
                />
            </div>
        )
    }
}

export default Book