import React, { Component } from 'react';
import ChangeShelfButton from './ChangeShelfButton';
import BlankCover from './no_cover_available.png';

class Book extends Component {
    render() {
        const { book } = this.props
        return(
            <div className="book">
                <img src={book.imageLinks ? book.imageLinks.thumbnail : BlankCover} alt={book.title} />
                <h5>{book.title ? book.title : "No Title Available"}</h5>
                <h6>{book.authors ? book.authors.join(', ') : "No Authors Available"}</h6>
                
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