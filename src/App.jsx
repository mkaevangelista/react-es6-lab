import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './UserList'
import Counter from './Counter'

function App() {
  // Step 6: Conditional Rendering (simulate login)
  const isLoggedIn = true;

  // Step 3: ES6 examples (console logs)
  const names = ['Alice', 'Bob', 'Charlie'];
  const doubled = names.map(name => name.length * 2);
  console.log('Doubled lengths:', doubled);

  const person = { name: 'Alice', age: 25 };
  const { name, age } = person;
  console.log('Destructured:', name, age);

  // Step 4: User list data
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

      {/* Step 6: Conditional Rendering */}
      <h2>Login Status</h2>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}

      {/* Step 5: Counter component */}
      <h2>Counter Example</h2>
      <Counter />

      {/* Step 4: User List */}
      <h2>User List</h2>
      <UserList users={users} />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
