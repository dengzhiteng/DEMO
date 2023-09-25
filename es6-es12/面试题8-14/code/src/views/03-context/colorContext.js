import { createContext } from 'react'

const colorContext = createContext()

const { Provider, Consumer } = colorContext

export {
  colorContext as default,
  Provider,
  Consumer
}