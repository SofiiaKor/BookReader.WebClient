import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const openNavBar = () => {
    document.getElementById('navHeader').style.display = "flex";
    document.getElementById('navHeader').style.height = "2rem";

    setTimeout(closeNavBar, 3000);
  }

  const closeNavBar = () => {
    document.getElementById('navHeader').style.display = "none";
    document.getElementById('navHeader').style.height = 0;
  }

  return (
    <div onMouseOver={openNavBar}>
      <p style={{color: "rgb(31, 31, 31)"}}>!</p>
    <header className={classes.header} id="navHeader" >
      <nav className={classes.nav} >
        <ul>
        <li>
            <NavLink to="/books" activeClassName={classes.active}>
              Main page
            </NavLink>
          </li>
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
    </div>
  );
};

export default MainNavigation;
