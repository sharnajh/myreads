import React, { Component } from 'react';

class ShelfTitle extends Component {
    render() {
        const { bookshelf } = this.props
        return(
            <h2>{bookshelf ? `${bookshelf.name} (${bookshelf.books.length})` : ""}</h2>
        )
    }
}

export default ShelfTitle