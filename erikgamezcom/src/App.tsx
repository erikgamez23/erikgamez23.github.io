// import { useState } from 'react'
import erikHome from './assets/erik/erikCooking.png';
import NavigationBar from './Components/NavigationBar'
import './App.css'
import Card from './Components/Card';


function App() {

  const title = "Hi, my name is Erik!"
  const body = "This is a work in progress; planning to make this a personal blog/portfolio."

  return (
    <>
      <NavigationBar></NavigationBar>

      <img src={erikHome} className="headerImage" alt="Erik Cooking" />

      <Card title={title} body={body}></Card>

    </>
  )
}

export default App
