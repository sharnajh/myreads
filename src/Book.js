import React, { Component } from 'react';
import ChangeShelfButton from './ChangeShelfButton';
import BlankCover from './no_cover_available.png';

class Book extends Component {
    render() {
        const { book, books } = this.props
        return(
            <div className="book">
                <div className="imgcont">
                    <ChangeShelfButton
                            book={book}
                            books={books}
                            onMove={this.props.onMove}
                            shelves={this.props.shelves}
                        />
                    <img src={book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : BlankCover} alt={book.title} />
                </div>
                
                <h5>{book.title ? book.title : "No Title Available"}</h5>
                <h6>{book.authors ? book.authors.join(', ') : "No Authors Available"}</h6>
                
                    
                
            </div>
        )
    }
}

export default Book