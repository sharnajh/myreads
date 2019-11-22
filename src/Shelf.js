import React, { Component } from 'react';
import ShelfTitle from './ShelfTitle';
import Book from './Book'

class Shelf extends Component {
    render() {
        const { books, bookshelf } = this.props
        return(
            <div>
                <ShelfTitle bookshelf={bookshelf} />
                    <ul>
                        {books.filter((book) => book.shelf === bookshelf).map((b, id) => (
                            <Book key={id} book={b} onMove={this.props.onMove} />
                        ))} 
                    </ul>
            </div>
        )
    }
}

export default Shelf