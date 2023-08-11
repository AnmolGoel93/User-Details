import React, { useState, useEffect } from "react";
import classes from "./UserInput.module.css";
import Card from "../UI/Card";

const UserInput = ({ onLoginHandler }) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("Checking Form Validity!!");
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);

    return () => {
      console.log("CleanUp..");
      clearTimeout(timeoutId);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    onLoginHandler(enteredEmail, enteredPassword);

    setEnteredEmail("");
    setEnteredPassword("");
    setFormIsValid(false);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  return (
    <Card className={classes.form}>
      <form onSubmit={loginHandler}>
        <div
          className={`${classes.form_control} ${
            emailIsValid === false && classes.invalid
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="text"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          ></input>
        </div>
        <div
          className={`${classes.form_control} ${
            passwordIsValid === false && classes.invalid
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          ></input>
        </div>
        <button type="submit" className={classes.login} disabled={!formIsValid}>
          Login
        </button>
      </form>
    </Card>
  );
};

export default UserInput;
