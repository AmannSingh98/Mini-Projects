import React from 'react'
import './Navtab.css'
import { NavLink } from 'react-router-dom'

const Navtab = React.memo(({ page }) => {
  const getFormattedName = (name) => name.charAt(0).toUpperCase() + name.slice(1)
  return (
    <li className="nav-section">
      <NavLink to={`/${page.link}`} className={({ isActive }) => (isActive ? 'active span' : 'span')}>
        {getFormattedName(page.name)}{' '}
      </NavLink>
    </li>
  )
})

export default Navtab
