import { createStore } from 'redux'

const defaultState = {
  count: 0
}

const reducer = (state=defaultState, action) => {
  if (action.type === 'add') {
    return {
      count: state.count + 1
    }
  }

  return state
}

const store = createStore(reducer)

export default store