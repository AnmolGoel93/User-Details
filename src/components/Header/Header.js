import React from "react";
import classes from "./Header.module.css";
import Navigation from "./Navigation";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>A Typical Page</h1>
      {props.isAuthenticated && <Navigation onLogout={props.onLogoutHandler} />}
    </header>
  );
};

export default Header;
