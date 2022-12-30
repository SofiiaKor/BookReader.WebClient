import React, { useState } from "react";

import "./BookForm.css";

let bookData;

const BookForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredNumberOfPages, setEnteredNumberOfPages] = useState("");
  const [enteredPublisher, setEnteredPublisher] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const numberOfPagesChangeHandler = (event) => {
    setEnteredNumberOfPages(event.target.value);
  };

  const publisherChangeHandler = (event) => {
    setEnteredPublisher(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    bookData = {
      title: enteredTitle,
      author: enteredAuthor,
      date: new Date(enteredDate),
      numberOfPages: enteredNumberOfPages,
      publisher: enteredPublisher,
    };

    props.onSaveBookData(bookData);
    setEnteredTitle("");
    setEnteredAuthor("");
    setEnteredDate("");
    setEnteredNumberOfPages("");
    setEnteredPublisher("");
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="new-book__control" tabIndex={1}>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            placeholder=""
            required
          />
        </div>
        <div className="new-book__control" tabIndex={2}>
          <label htmlFor="author">Author</label>
          <input
            name="author"
            type="text"
            value={enteredAuthor}
            onChange={authorChangeHandler}
            placeholder=""
            required
          />
        </div>
        <div className="new-book__control" tabIndex={3}>
          <label htmlFor="date">Date</label>
          <input
            name="date"
            type="date"
            min="100-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-book__control" tabIndex={4}>
          <label htmlFor="numberOfPages">Number of pages</label>
          <input
            name="numberOfPages"
            type="number"
            min="1"
            max="5000"
            value={enteredNumberOfPages}
            onChange={numberOfPagesChangeHandler}
            placeholder="1"
          />
        </div>
        <div className="new-book__control" tabIndex={5}>
          <label htmlFor="publisher">Publisher</label>
          <input
            name="publisher"
            type="text"
            value={enteredPublisher}
            onChange={publisherChangeHandler}
            placeholder=""
          />
        </div>
        <div className="new-book__actions" tabIndex={6}>
          <button type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
export { bookData };
