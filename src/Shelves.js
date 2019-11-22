import React, { Component } from 'react';
import Shelf from './Shelf';

class Shelves extends Component {
    state = {
        shelves: [
            { value: "currentlyReading", title: 'Currently Reading' },
            { value: "wantToRead", title: "Want to Read" },
            { value: "read", title: "Read" }
        ]
     }
    
    render() {
        const { books } = this.props
        const { shelves } = this.state
        return (
            <div>
            {shelves.map((shelf, id) => {
                const booksByShelf = books.filter((b) => b.shelf === shelf.value)
                return (
                    <Shelf
                        key={id}
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