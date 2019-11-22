import React, { Component } from 'react';
import ShelfTitle from './ShelfTitle';
import Book from './Book'

class Shelf extends Component {
    render() {
        const { books, shelf } = this.props
        return(
            <div>
                <ShelfTitle shelf={shelf} />
                    <ul>
                        {books.map((b, id) => (
                            <Book 
                                key={id} 
                                book={b} 
                                onMove={this.props.onMove}
                                shelves={this.props.shelves}
                            />
                        ))} 
                    </ul>
            </div>
        )
    }
}

export default Shelf