import React, { Component } from 'react'
import { connect } from 'react-redux'
import Child from './Child'

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add() {
      dispatch({
        type: 'add'
      })
    }
  }
}

class Demo extends Component {
  render() {
    return (
      <>
        <div>Demo {this.props.count}</div>
        <button onClick={this.props.add}>add</button>
        <Child></Child>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo)
