import React from "react";
import "./BooksList.css";

import BookItem from "./BookItem";

const BooksList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="books-list__fallback">Found no books.</h2>;
  }

  const bookList = props.items.map((book) => (
    <BookItem
          key={book.id}
          title={book.title}
          author={book.author}
          year={book.year}
          numberOfPages={book.numberOfPages}
          publisher={book.publisher}
          ISBN={book.ISBN}
        />
  ));

  console.log(bookList);

  return (
    <ul className="books-list">
      {bookList}
    </ul>
  );
};

export default BooksList;
