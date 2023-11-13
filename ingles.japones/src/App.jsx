
import './App.css'
import { Outlet } from 'react-router-dom'
import ErrorPage from './routes/errorPage'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className='caixap'>
      <Navbar/>
      <h3>bem-vindo</h3>
      <Outlet/>

    </div>
  )
}

export default App
