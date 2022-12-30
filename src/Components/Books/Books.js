import React from "react";
import SearchInput from "../UI/SearchInput";

import "./Books.css";
import BooksList from "./BooksList";

const Books = (props) => {
  return (
    <React.Fragment>
      <SearchInput />
      <BooksList items={props.items} />
    </React.Fragment>
  );
};

export default Books;
