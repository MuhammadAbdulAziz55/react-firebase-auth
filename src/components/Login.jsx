import React, { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ setAuthState, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email !== null && password !== null) {
      signInWithEmailAndPassword(auth, email, password)
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
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an Account{" "}
        <span onClick={() => setAuthState("register")}>Register</span>{" "}
      </p>
    </div>
  );
};

export default Login;
