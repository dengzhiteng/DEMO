import React, { useState, useEffect } from 'react'

// function foo () {
//   useState()
// }

// foo()

export default function Demo() {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState('hello')
  const [count2, setCount2] = useState(100)

  useEffect(() => {
    console.log('100')
  })

  const handleClick = () => {
    setCount(count => count + 1)
  }
  

  return (
    <>
      <div>Demo {count}</div>
      <button onClick={handleClick}>add</button>
    </>
  )
}
