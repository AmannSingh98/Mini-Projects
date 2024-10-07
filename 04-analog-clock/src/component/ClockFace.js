import { useState, useEffect } from 'react'
import './ClockFace.css'

const ClockFace = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])
  const hours = time.getHours() % 12 // 12 Hour Format
  const minutes = time.getMinutes() // Minutes
  const hourStyle = hours * 30 + minutes * 0.5
  const minuteStyle = minutes * 6 + time.getSeconds() * 0.1
  const secondStyle = time.getSeconds() * 6
  return (
    <div className="clock">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="mark"
          style={{ transform: `rotate(${index * 30}deg)` }}
        >
          <div className="inner-mark"></div>
        </div>
      ))}

      <div
        className="hand hour-hand"
        style={{ transform: `rotate(${hourStyle}deg)` }}
      />
      <div
        className="hand minute-hand"
        style={{ transform: `rotate(${minuteStyle}deg)` }}
      />
      <div
        className="hand second-hand"
        style={{ transform: `rotate(${secondStyle}deg)` }}
      />
    </div>
  )
}

export default ClockFace
