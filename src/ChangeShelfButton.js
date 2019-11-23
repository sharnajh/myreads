import React, { Component } from 'react';

class ChangeShelfButton extends Component {
    moveShelf = (e) => {
        e.preventDefault()
        this.props.onMove(this.props.book, e.target.value)
    }
    render() {
        const { book, shelves } = this.props
        return (
                    <div className="shelf-menu-btn">
                        <select
                            onChange={this.moveShelf} 
                            name="shelf"
                        >
                        <option value="none" disabled={book.shelf ? true : false}>
                            Move to...
                        </option>
                        {shelves.map((shelf,id) => (
                            <option 
                                key={id}
                                value={shelf.value}
                                selected={book.shelf ? (book.shelf === shelf.value ? true : false) : false}
                            >{shelf.title}</option>
                        ))}
                        {book.shelf ? (
                            <option value=" " selected={false}>Remove from shelf</option>
                         ) : ""}
                        </select>
                    </div>
        )
    }
}

export default ChangeShelfButton