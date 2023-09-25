import React, { useState, useEffect } from 'react'

export default function Demo() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('use Effect 2')
  })
  
  useEffect(() => {
    console.log('use Effect 1')
    // console.log(document.querySelector('#count').innerHTML)

    return () => {
      console.log('unmount')
      // console.log(document.querySelector('#count').innerHTML)
    }
  })

  const handleClick = () => {
    setCount(count => count + 1)
  }

  return (
    <>
      <div id="count">Demo {count}</div>
      <button onClick={handleClick}>add</button>
    </>
  )
}
