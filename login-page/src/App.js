import "./App.css";
import { useState } from "react";

export default function App() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "user" && password === "password") {
      // alert("Login Successful");
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
      // alert("Invalid username or password");
    }
  };
  return (
    <div>
      <h2>Login Page</h2>
      {loggedIn == false && <p>Invalid username or password</p>}
      {!loggedIn && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Username:
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="text"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
      {loggedIn == true && <p>Welcome, {username}!</p>}
    </div>
  );
}
