import React, { useContext } from 'react'
import colorContext from './colorContext'
import sizeContext from './sizeContext'

export default function Child() {
  const colorValue = useContext(colorContext)
  const sizeValue = useContext(sizeContext)
  
  return (
    <div
      style={{
        color: colorValue.color,
        fontSize: sizeValue.size
      }}
    >Child</div>
  )
}
