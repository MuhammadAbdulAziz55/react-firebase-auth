import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";

const Register = ({ setUser, setAuthState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (email !== null && password !== null) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          setUser(user.user.email);
          setAuthState("home");
        })
        .catch((err) => {
          alert(err);
        });
    }
  };
  return (
    <div class="container">
      <h2>Register</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter your email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter your password"
      />
      <button onClick={handleRegister}>Sign up</button>
      <p>
        Already have an Account{" "}
        <span onClick={() => setAuthState("login")}>Login</span>{" "}
      </p>
    </div>
  );
};

export default Register;
