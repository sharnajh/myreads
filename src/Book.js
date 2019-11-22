import React, { Component } from 'react';
import ChangeShelfButton from './ChangeShelfButton'

class Book extends Component {
    render() {
        const { book } = this.props
        return(
            <div className="book">
                <img src={book.imageLinks ? book.imageLinks.thumbnail : ""} alt={book.title} />
                <h5>{book.title}</h5>
                <h6>{book.authors ? book.authors.join(', ') : ""}</h6>
                
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