import React from 'react'
import { Provider } from './colorContext'
import Child from './Child'

export default function Demo() {
  return (
    <Provider value={{color: 'red'}}>
      <Child></Child>
    </Provider>
  )
}
