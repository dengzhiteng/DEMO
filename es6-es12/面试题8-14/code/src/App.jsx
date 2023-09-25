import React, { Component } from 'react'
// import Demo from './views/01-hoc/Demo'
// import Demo from './views/02-render-props/Demo'
// import Demo from './views/03-context/Demo'
// import Demo from './views/04-react-redux/Demo'
// import Demo from './views/05-selfHooks/Demo'
import { Provider } from 'react-redux'
import store from './views/04-react-redux/store'

// import Demo from './views/06-useState/Demo'
import Demo from './views/07-useEffect/Demo'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Demo title="hello"></Demo>
      </Provider>
    )
  }
}
