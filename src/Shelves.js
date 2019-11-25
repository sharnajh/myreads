import React from "react";
import Shelf from "./Shelf";

const Shelves = props => (
  <div id="shelves">
    {props.shelves.map((shelf, id) => {
      const booksByShelf = props.books.filter(b => b.shelf === shelf.value);
      return (
        <Shelf
          key={id}
          shelves={props.shelves}
          shelf={shelf}
          books={booksByShelf}
          onMove={props.onMove}
        />
      );
    })}
  </div>
);

export default Shelves;
