import { useEffect, useState } from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { auth } from "./components/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const [authState, setAuthState] = useState(null);

  useEffect(() => {
    const unSubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        if (authenticatedUser) {
          setUser(authenticatedUser.email);
          setAuthState("home");
        } else {
          setUser(null);
          setAuthState("login");
        }
      }
    );
    return unSubscribeAuth;
  }, []);

  if (authState === null) return <h1>loading....</h1>;
  if (authState === "register")
    return <Register setAuthState={setAuthState} setUser={setUser} />;
  if (authState === "login")
    return <Login setAuthState={setAuthState} setUser={setUser} />;
  if (user) return <Home setAuthState={setAuthState} setUser={setUser} />;

  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
