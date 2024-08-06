import { useEffect, useRef, useState } from 'react'
import './PopScreen.css'

const PopScreen = () => {
  const [isEnablePopView, setIsEnabledPopView] = useState(false)
  const popScreenRef = useRef(null)
  const popButtonRef = useRef(null)
  console.log('first line')

  const togglePopView = () => {
    setIsEnabledPopView(!isEnablePopView)
    console.log('togglepop')
  }

  const closePopView = () => {
    setIsEnabledPopView(false)
    console.log('close pop view')
  }

  const handlePopView = (event) => {
    if (
      popScreenRef.current &&
      !popButtonRef.current.contains(event.target) &&
      !popScreenRef.current.contains(event.target)
    ) {
      closePopView()
    }
    console.log('handle pop view')
  }

  useEffect(() => {
    console.log('Use Effect')
    if (popScreenRef) {
      document.addEventListener('mousedown', handlePopView)
    } else {
      document.removeEventListener('mousedown', handlePopView)
    }
    return () => {
      document.removeEventListener('mousedown', handlePopView)
    }
  }, [isEnablePopView])

  console.log(isEnablePopView)

  return (
    <div className="popScreenContainer">
      <button className="popButton" onClick={togglePopView} ref={popButtonRef}>
        Pop Button
      </button>
      {isEnablePopView && (
        <div className="popViewContainer" ref={popScreenRef}>
          <p className="popContent">This is a Pop up Screen</p>
          <button className="closeButton" onClick={closePopView}>
            close
          </button>
        </div>
      )}
    </div>
  )
}

export default PopScreen
