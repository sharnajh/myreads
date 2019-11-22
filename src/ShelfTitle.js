import React, { Component } from 'react';

class ShelfTitle extends Component {
    render() {
        const { shelf } = this.props
        return(
            <h2>{shelf.title}</h2>
        )
    }
}

export default ShelfTitle