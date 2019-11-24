import React, { Component } from 'react';

class ShelfTitle extends Component {
    render() {
        const { shelf } = this.props
        return(
            <div>
            <h2 className="shelf-title">{shelf.title ? shelf.title : shelf}</h2>
            <hr />
            </div>
        )
    }
}

export default ShelfTitle