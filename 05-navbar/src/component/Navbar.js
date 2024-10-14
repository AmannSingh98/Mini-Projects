import { useState, useEffect } from 'react'
import data from './NavbarData.json'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    if (window.innerWidth > 768) setToggle(false)
  }, [window.innerWidth])
  return (
    <header>
      <nav>
        <h1>Navbar</h1>
        <div onClick={() => setToggle(!toggle)}>
          <span />
          <span />
          <span />
        </div>
        <ul className={`${toggle ? 'nav__item--visible' : 'nav__item--hidden'}`}>
          {data.map((item, idx) => (
            <li key={idx}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
