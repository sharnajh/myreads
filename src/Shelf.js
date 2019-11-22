import React, { Component } from 'react';
import ShelfTitle from './ShelfTitle';

class Shelf extends Component {
    render() {
        const { bookshelf } = this.props
        return(
            <div>
                <ShelfTitle bookshelf={bookshelf} />
                    <ul>
                        {bookshelf ? bookshelf.books.map((book) => (
                            <li key={book.id}>{book.title}</li>
                        )) : ""}
                    </ul>
            </div>
        )
    }
}

export default Shelf