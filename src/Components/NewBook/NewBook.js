import React from "react";

import BookForm from "./BookForm";
import "./NewBook.css";

const NewBook = (props) => {
  const saveBookDataHandler = (enteredBookData) => {
    const bookData = {
      ...enteredBookData,
      id: Math.random().toString(),
    };
    props.onAddBook(bookData);
  };

  return (
    <div className="new-book">
      <BookForm
        onSaveBookData={saveBookDataHandler}
      />
    </div>
  );
};

export default NewBook;
