import React, { Component } from 'react';

class ShelfTitle extends Component {
    convertTitle = (title) => {
        var result = title.replace( /([A-Z])/g, " $1" );
        var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
        return finalResult;
    }
    render() {
        const { bookshelf } = this.props
        return(
            <h2>{this.convertTitle(bookshelf)}</h2>
        )
    }
}

export default ShelfTitle