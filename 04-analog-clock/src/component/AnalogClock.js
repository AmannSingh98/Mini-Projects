import './AnalogClock.css'
import ClockFace from './ClockFace'

const AnalogClock = () => {
  return (
    <div className="clockContainer">
      <h2>Analog Clock</h2>
      <>
        <ClockFace />
      </>
    </div>
  )
}

export default AnalogClock
