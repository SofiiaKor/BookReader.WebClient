import React from "react";

import BookForm from "./BookForm";
import "./NewBook.css";
import { useHistory } from "react-router-dom";

const NewBook = (props) => {
  const history = useHistory();
  const saveBookDataHandler = (enteredBookData) => {
    const bookData = {
      ...enteredBookData,
      id: enteredBookData.ISBN,
    };
    props.onAddBook(bookData);
    history.push("/books");
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
