import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Blue from './Components/Blue'
import Red from './Components/Red'
import Home from './Components/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <div id="navbar">
        <Link to="/">Homepage</Link>
        <Link to="/Blue">Blue</Link>
        <Link to="/Red">Red</Link>
      </div>

      <Routes>
          <Route path="/" element={ <Home/> }></Route>
          <Route path="/blue" element={ <Blue/> }></Route>
          <Route path="/red" element={ <Red/> }></Route>
      </Routes>
      
    </BrowserRouter>
      
      <div id="main-section">{/* routes here */}</div>
      
      
    </>
  )
}

export default App
