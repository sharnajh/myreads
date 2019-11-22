import React, { Component } from 'react';
import ChangeShelfButton from './ChangeShelfButton'

class Book extends Component {
    render() {
        const { book } = this.props
        return(
            <div>
                {book.title}
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