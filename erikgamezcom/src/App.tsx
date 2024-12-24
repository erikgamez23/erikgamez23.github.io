import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(
      count + 1
    )
  };
  
  
  return (
    <>
      <div>
      <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Erik Gamez Dot Com w/ React + Vite</h1>
      <div className="card">
        <h2> Count is {count} </h2>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrease
        </button>
        <button onClick={increaseCount}>
          Increase
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App