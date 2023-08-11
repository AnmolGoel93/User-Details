import React from "react";
import classes from "./Navigation.module.css";

const Navigation = ({ onLogout }) => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <a href="/">Users</a>
        </li>
        <li>
          <a href="/">Admin</a>
        </li>
        <li>
          <button type="button" onClick={onLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
