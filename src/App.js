import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserData/UserInput";
import LoggedIn from "./components/LoggedIn/LoggedIn";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedLoggedInInformation) {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  return (
    <>
      <Header isAuthenticated={isLoggedIn} onLogoutHandler={logoutHandler} />
      <main>
        {!isLoggedIn && <UserInput onLoginHandler={loginHandler} />}
        {isLoggedIn && <LoggedIn />}
      </main>
    </>
  );
};

export default App;
