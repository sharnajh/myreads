import React from "react";
import Book from "./Book";

const Shelf = props => (
  <div className="shelf">
    {props.shelf.title && (
      <div>
        <h2 className="shelf-title">{props.shelf.title}</h2>
        <hr />
      </div>
    )}
    <div className="shelf-books">
      {props.books.map((b, id) => (
        <Book
          key={id}
          book={b}
          books={props.books}
          onMove={props.onMove}
          shelves={props.shelves}
        />
      ))}
    </div>
  </div>
);

export default Shelf;
