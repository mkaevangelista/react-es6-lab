import { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './UserList'
import Counter from './Counter'
import UserAPI from './UserAPI'

function App() {
  // 🔹 LOGIN STATE (replaces the fake isLoggedIn = true)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim() !== "") {
      setIsLoggedIn(true);
      console.log(`User logged in: ${username}`); // ES6 template literal output
    }
  };

  // 🔹 Step 3: ES6 examples (console logs)
  const names = ['Alice', 'Bob', 'Charlie'];
  const doubled = names.map(name => name.length * 2);
  console.log('Doubled lengths:', doubled);

  const person = { name: 'Alice', age: 25 };
  const { name, age } = person;
  console.log('Destructured:', name, age);

  // 🔹 Step 4: User list data
  const users = ['Alice', 'Bob', 'Charlie'];

  return (
    <>
      {/* Logos */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      {/* 🔹 LOGIN SECTION (NEW FEATURE) */}
      <h2>Login</h2>
      {!isLoggedIn ? (
        <div>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p>Please log in</p>
        </div>
      ) : (
        <p>Welcome back, {username}! 🎉</p>
      )}

      <hr />

      {/* 🔹 SHOW FEATURES ONLY AFTER LOGIN */}
      {isLoggedIn && (
        <>
          {/* Step 5: Counter component */}
          <h2>Counter Example</h2>
          <Counter />

          {/* Step 4: User List (no bullets) */}
          <h2>User List</h2>
          <UserList users={users} />

          {/* Step 7: API Users (no bullets) */}
          <h2>API Users</h2>
          <UserAPI />
        </>
      )}

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
