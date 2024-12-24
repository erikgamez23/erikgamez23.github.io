import { useState } from 'react'
import icon from './assets/favicon/android-chrome-384x384.png'
import erikHome from './assets/erik/erikCooking.png';

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
      <a href="https://erikgamez.com" target="_blank">
        <img src={icon} className="logo" alt="Erik Gamez logo" />
      </a>
      </div>

      <div>
      {/* I can add a link to my Cooking Tab later with Recipes? */}
      <img src={erikHome} className="headerImage" alt="Erik Cooking" />
      </div>

      <h1>Erik Gamez Dot Com</h1>

      <div className="card">
        <h2> Count is {count} </h2>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrease
        </button>
        <button onClick={increaseCount}>
          Increase
        </button>
      </div>
    </>
  )
}

export default App
