import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import ErrorPage from './routes/errorPage'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='caixap' style={{backgroundImage:`url("https://i.pinimg.com/564x/e0/f8/e6/e0f8e694740dc39188481932dce9b164.jpg")`}} >
      <Navbar/>
      <h3>bem-vindo</h3>
      <Outlet/>

    </div>
  )
}

export default App
