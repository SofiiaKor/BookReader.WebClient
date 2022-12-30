import React from "react";
import "./SearchInput.css";

const SearchInput = (props) => {
  const classes = "searchInput " + props.className;

  return (
    <React.Fragment>
      <div className={classes}>{props.children}</div>

      <div className="search__container">
        <p className="search__title">It reads better than it lives.</p>
        <p className="search__title_author">Ian Flaming</p>
        <input className="search__input" type="text" placeholder="Search..." />
      </div>
    </React.Fragment>
  );
};

export default SearchInput;
