import React from 'react'
import useCount from './useCount'

export default function Child() {
  const {count, handleClick} = useCount()
  return (
    <div>Child {count} <button onClick={handleClick}>+</button></div>
  )
}
