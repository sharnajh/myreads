import React, { Component } from 'react';
import ShelfTitle from './ShelfTitle';
import Book from './Book'

class Shelf extends Component {
    render() {
        const { books, shelf } = this.props
        return(
            <div className="shelf">
                <ShelfTitle shelf={shelf} />
                <div className="shelf-books">
                    
                        {books.map((b, id) => (
                            <Book 
                                key={id} 
                                book={b} 
                                onMove={this.props.onMove}
                                shelves={this.props.shelves}
                            />
                        ))} 
                </div>
            </div>
        )
    }
}

export default Shelf