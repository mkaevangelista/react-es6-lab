import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './UserList'
import Counter from './Counter'
import UserAPI from './UserAPI'

function App() {
  // Conditional Rendering for Login
  const isLoggedIn = true;

  // ES6 examples (console logs)
  const names = ['Alice', 'Bob', 'Charlie'];
  const doubled = names.map(name => name.length * 2);
  console.log('Doubled lengths:', doubled);

  const person = { name: 'Alice', age: 25 };
  const { name, age } = person;
  console.log('Destructured:', name, age);

  // User list data
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

      {/* Conditional Rendering */}
      <h2>Login Status</h2>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}

      {/* Counter component */}
      <h2>Counter Example</h2>
      <Counter />

      {/* User List */}
      <h2>User List</h2>
      <UserList users={users} />

      {/* API Users */}
      <h2>API Users</h2>
      <UserAPI />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

