import React, { Component } from 'react';
import serializeForm from 'form-serialize';

class Book extends Component {
    moveShelf = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        values.book = this.props.book
        if (this.props.onMove) {
            this.props.onMove(values)
        }
    }

    render() {
        const { book } = this.props
        return(
            <li>
                {book.title}
                <form onSubmit={this.moveShelf}> 
                    <select name="shelf">
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                    </select>
                    <button>Move Shelf</button>
                </form>
            </li>
        )
    }
}

export default Book