import "./App.css";
import { useState } from "react";

export default function App() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "user" && password === "password") {
      // alert("Login Successful");
      setIsLoggedIn(true);
      setError("");
    } else {
      setIsLoggedIn(false);
      setError("Invalid username or password");
      // alert("Invalid username or password");
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      {isLoggedIn?(<p>Welcome, {username}!</p>) :(
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
          <div>
            <label htmlFor="username" name="username">
              Username:
              <input
                type="text"
                name="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="password" name="password">
              Password:
              <input
                type="password"
                password="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
          <button type="submit" name="login">Submit</button>
          </div>
        </form>) }
    </div>
  );
}
