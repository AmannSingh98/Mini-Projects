import './Navbar.css'
import Pages from './nav.json'
import Navtab from './Navtab'
import { useEffect, useMemo, useState } from 'react'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const Section = useMemo(() => {
    return Pages.map((page, idx) => <Navtab page={page} key={idx} />)
  }, [Pages])

  const handleClick = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 575) setToggle(false)
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="nav">
      <div className="nav-main">
        <h2 className="nav-title">Nav Vite</h2>
        <ul className={toggle ? 'nav-sections-list' : 'nav-sections-list-hidden'}>{Section}</ul>
        <div className="hamIcon" onClick={handleClick}>
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
