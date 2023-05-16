import React from "react";
import "./BookItem.css";
import Card from "../UI/Card";

function BookItem(props) {
  let liStyle = {
    backgroundImage: `url("https://covers.openlibrary.org/b/isbn/${props.ISBN}-M.jpg")`,
    backgroundRepeat: "no-repeat",
  };

  return (
    <li style={liStyle}>
      <Card className="book-item">
        {/* <BookDate date={props.year} /> */}
        {/* <div className="book-item__description">
          <h2>{props.title}</h2>
          <p>{props.author}</p>
        </div>
        <div className="book-item__additional-info"> */}
        {/* <div className="book-item__price">!{props.numberOfPages}! pages</div> */}
        {/* <p>{props.publisher}</p>
        </div> */}
      </Card>
    </li>
  );
}

export default BookItem;
