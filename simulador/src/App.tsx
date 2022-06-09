import { useState } from 'react'
import { Home } from './Pages/Home'
import { LandingPage } from './Pages/Landingpage'

import './old-styes.css';
import './App.css';
import { Quiz } from './Pages/Quiz';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/>, */}
    <LandingPage/>,
    {/* <Quiz /> */}
    </>
  )
}

export default App
