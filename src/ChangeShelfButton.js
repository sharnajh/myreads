import React, { Component } from 'react';

class ChangeShelfButton extends Component {
    moveShelf = (e) => {
        e.preventDefault()
        this.props.onMove(this.props.book, e.target.value)
    }

    render() {
        const { book, books, shelves } = this.props
        let defaultShelf = 'none';

        if (books) {
            for (let b of books) {
                if (b.id === book.id) {
                defaultShelf = b.shelf;
                break;
                }
            }
        }
        return (
                    <div className="shelf-menu-btn">
                        <select
                            onChange={this.moveShelf} 
                            name="shelf"
                            defaultValue={defaultShelf}
                        >
                        <option value="none" disabled>
                            Move to...
                        </option>
                        {shelves.map((shelf,id) => (
                            <option 
                                key={id}
                                value={shelf.value}
                            >{shelf.title}</option>
                        ))}
                        </select>
                    </div>
        )
    }
}

export default ChangeShelfButton