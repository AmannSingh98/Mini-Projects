import { Navbar } from './component'
import './App.css'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
