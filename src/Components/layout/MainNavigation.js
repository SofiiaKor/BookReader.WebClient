import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/new-book" activeClassName={classes.active}>
              Add a book
            </NavLink>
          </li>
          <li>
            <NavLink to="/notes" activeClassName={classes.active}>
              Notes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
