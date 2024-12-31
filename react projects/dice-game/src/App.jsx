import React, { useState } from 'react'
import Home from './pages/Home'
import GamePage from './pages/GamePage'

const App = () => {
  let [started, setStarted] = useState(true);

  function toggleGamePlay() {
    setStarted(prev => !prev);
  }

  return (
    <div className='container'>
      {
        started ? <Home toggle={toggleGamePlay}></Home> : <GamePage></GamePage>
      }
    </div >
  )
}

export default App
