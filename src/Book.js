import React from "react";
import ChangeShelfButton from "./ChangeShelfButton";
import BlankCover from "./images/no_cover_available.png";

const Book = props => (
  <div className="book">
    <div className="imgcont">
      <ChangeShelfButton
        book={props.book}
        books={props.books}
        onMove={props.onMove}
        shelves={props.shelves}
      />
      <img
        src={
          props.book.imageLinks && props.book.imageLinks.thumbnail
            ? props.book.imageLinks.thumbnail
            : BlankCover
        }
        alt={props.book.title}
      />
    </div>

    <h5>{props.book.title ? props.book.title : "No Title Available"}</h5>
    <h6>
      {props.book.authors
        ? props.book.authors.join(", ")
        : "No Authors Available"}
    </h6>
  </div>
);

export default Book;
