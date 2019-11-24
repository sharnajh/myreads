import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI.js';
import Shelf from './Shelf';

class SearchPage extends Component {
    state = {
        query: "",
        results: [],
        catchError: false
    }

    // Filters the search results so that 
    // the shelf is selected if applicable.
    filterBooks = (books) => {
            books.map((book) => { 
                for (let b of this.props.shelvedBooks) {
                    if (book.id === b.id) {
                        book.shelf = b.shelf 
                        break //important
                    } else {
                        book.shelf = "none"
                    }
                }
            }) 
            return books 
    }

    searchResults = (q) => {
        BooksAPI.search(q.trim()).then((books) => {
            if ( q === this.state.query ) { 
                if ( books.length > 0 ) {
                    this.setState({ results: this.props.shelvedBooks ? this.filterBooks(books) : books, catchError: false })
                }  
                else {
                    this.setState({ results: [], catchError: true })
                }
            }
        })
    }
    updateQuery = (e) => {
        this.setState(() => ({
            query: e
        }))
        if (e) {
        this.searchResults(e)
        } else {
            this.setState({ results: [], searchErr: false })
        }
    }
    render() {
        const { query, results, catchError } = this.state
        const { shelves } = this.props
        return(
            <div id="search-pg">
            <input
                id="search-bar"
                type="text"
                value={query}
                placeholder="Search for books"
                onChange={(e) => this.updateQuery(e.target.value)}
            />
                <div id="shelves">
                <div className="shelf">
                <div className="shelf-books">
                {results.map((book, id) => (
                
                <div key={id} className="imgcont">
                        <Shelf
                            key={id}
                            shelf="Search Results"
                            books={results}
                            shelves={shelves}
                            onMove={this.props.onMove}
                        />
                </div> 
                
                ))}
                </div>
                </div>
                </div>
                
               
                
                
            
            {catchError && (
                <h3>Your search - "{query}" - did not match with any books.</h3>
            )}
            </div>
        )
    }
}

export default SearchPage