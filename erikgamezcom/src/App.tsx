// import { useState } from 'react'
import icon from './assets/favicon/android-chrome-384x384.png'
import erikHome from './assets/erik/erikCooking.png';

import './App.css'
import Card from './Card';

function App() {

  const title = "Hi, my name is Erik!"
  const body = ""

  return (
    <>
      <div>
        <a href="https://erikgamez.com" target="_blank">
          <img src={icon} className="logo" alt="Erik Gamez logo" />
        </a>
      </div>

      <div className='hstack'>
        {/* I can add a link to my Cooking Tab later with Recipes? */}
        <img src={erikHome} className="headerImage" alt="Erik Cooking" />

        <div className='vstack'>
        <Card
            title={title}
            body={body}
          ></Card>
          <Card
            title={title}
            body={body}
          ></Card>
        </div>

      </div>

    </>
  )
}

export default App
