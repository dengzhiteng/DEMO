import React, { Component } from 'react'
import addProps from './addProps'
import addProps2 from './addProps2'

class Demo extends Component {
  render() {
    console.log(this.props)

    return (
      <div>Demo</div>
    )
  }
}

export default addProps2(addProps(Demo))