import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim() !== "") {
      setIsLoggedIn(true);
      console.log(`User logged in: ${username}`);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    console.log("User logged out");
  };

  return (
    <div className="app-container fade-in">
      {/* Logos */}
      <div className="logo-container">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="title">Vite + React Login</h1>

      {!isLoggedIn ? (
        <LoginForm
          username={username}
          setUsername={setUsername}
          onLogin={handleLogin}
        />
      ) : (
        <Dashboard username={username} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
