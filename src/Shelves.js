import React, { Component } from 'react';
import Shelf from './Shelf';

class Shelves extends Component {
    
    render() {
        const { books, shelves } = this.props
        return (
            <div>
                
            {shelves.map((shelf, id) => {
                const booksByShelf = books.filter((b) => b.shelf === shelf.value)
                return (
                    <Shelf
                        key={id}
                        shelves={shelves}
                        shelf={shelf}
                        books={booksByShelf}
                        onMove={this.props.onMove}
                    />
                )
            })}
        
            </div>
        )
    }
}

export default Shelves