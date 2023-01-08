import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const Home = ({ setUser, setAuth }) => {
  const handleSignOut = () => {
    signOut(auth)
      .then(setUser(null))
      .then(setAuth("login"))
      .catch((err) => alert(err));
  };
  return (
    <div className="home">
      <h1>Welcome to Home Page</h1>
      <button className="logout-btn" onClick={handleSignOut}>
        Logout
      </button>
    </div>
  );
};

export default Home;
