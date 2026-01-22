import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './UserList'  // Step 4 import

function App() {
  // Step 5: Counter state
  const [count, setCount] = useState(0)

  // Step 3: ES6 examples (console logs)
  const names = ['Alice','Bob','Charlie'];
  const doubled = names.map(name => name.length * 2);
  console.log('Doubled lengths:', doubled);

  const person = { name: 'Alice', age: 25 };
  const { name, age } = person;
  console.log('Destructured:', name, age);

  // Step 4: User list data
  const users = ['Alice','Bob','Charlie'];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* Step 5: Counter */}
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Step 4: User list */}
      <h2>User List</h2>
      <UserList users={users} />
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
