import React from "react";
import classes from "./LoggedIn.module.css";
import Card from "../UI/Card";

const LoggedIn = () => {
  return (
    <Card className={classes.loggedIn}>
      <p className={classes.message}>Welcome Back!</p>
    </Card>
  );
};

export default LoggedIn;
