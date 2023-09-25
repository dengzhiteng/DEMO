import { createContext } from 'react'

const sizeContext = createContext({size: '50px'})

const { Provider, Consumer } = sizeContext

export {
  sizeContext as default,
  Provider,
  Consumer
}