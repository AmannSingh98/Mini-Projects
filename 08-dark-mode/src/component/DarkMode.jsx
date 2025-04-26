import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import './DarkMode.css'

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const theme = isDarkMode ? 'dark' : 'light'

  const handleClick = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  const setDarkMode = () => {
    localStorage.setItem('theme', 'dark')
  }

  const setLightMode = () => {
    localStorage.setItem('theme', 'light')
  }

  // useEffect(() => {
  //   if (isDarkMode) {
  //     setDarkMode()
  //   } else {
  //     setLightMode()
  //   }
  // }, [isDarkMode])

  useEffect(() => {
    console.log(localStorage.getItem('theme'))
    setIsDarkMode(localStorage.getItem('theme') === 'dark')
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)

    if (theme === 'dark') {
      setDarkMode()
    } else {
      setLightMode()
    }
  }, [isDarkMode])

  return (
    <>
      <input type="checkbox" id="checkbox" onClick={handleClick} />
      <label htmlFor="checkbox" className="toggle-checkbox">
        <span className="icon">
          {theme === 'dark' ? (
            <FontAwesomeIcon icon={faSun} size="2x" className="sun" />
          ) : (
            <FontAwesomeIcon icon={faMoon} size="2x" className="moon" />
          )}
        </span>
      </label>
    </>
  )
}

export default DarkMode
