import React, { Component } from 'react';
import Shelf from './Shelf'

class Shelves extends Component {
    render() {
        const { shelves, books } = this.props
        return (
            <div>
            {shelves ? shelves.map((shelf, id) => (
                <Shelf key={id} books={books} bookshelf={shelf} />
              )) : "" }
            </div>
        )
    }
}

export default Shelves