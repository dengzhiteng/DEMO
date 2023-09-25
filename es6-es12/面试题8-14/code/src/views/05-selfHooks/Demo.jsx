import React from 'react'
import useCount from './useCount'
import useDoubleCount from './useDouble'
import useTitle from './useTitle'

import Child from './Child'

export default function Demo() {
  const { count, handleClick } = useCount()
  const { doubleCount } = useDoubleCount(count)
  useTitle(count)

  return (
    <>
      <Child></Child>
      <div>{doubleCount}</div>
      <button onClick={handleClick}>{count}</button>
    </>
  )
}
