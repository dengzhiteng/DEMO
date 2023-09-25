import React, { useState } from 'react'

const useCount = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count+1)
  }

  return {
    count,
    handleClick
  }
}

export default useCount