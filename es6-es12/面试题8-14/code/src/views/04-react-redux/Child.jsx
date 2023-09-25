import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Child() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <>
      <div>Child {count}</div>
      <button onClick={() => dispatch({type: 'add'})}>add</button>
    </>
  )
}
