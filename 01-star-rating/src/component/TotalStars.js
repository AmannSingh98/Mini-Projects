import Star from './Star'
import { useState } from 'react'

const TotalStars = () => {
  const [rating, setRating] = useState(0)
  const [hoverValue, setHoverValue] = useState(0)
  return Array.from({ length: 5 }, (_, index) => {
    return (
      <>
        <Star
          key={index}
          selected={index < (hoverValue || rating)}
          onClick={() => setRating(index + 1)}
          onMouseOver={() => setHoverValue(index + 1)}
          onMouseOut={() => setHoverValue(0)}
        />
      </>
    )
  })
}

export default TotalStars
