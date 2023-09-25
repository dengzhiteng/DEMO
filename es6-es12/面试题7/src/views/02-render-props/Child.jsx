import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    list: [
      {
        id: 0,
        name: 'a'
      },
      {
        id: 2,
        name: 'b'
      },
      {
        id: 3,
        name: 'c'
      }
    ]
  }

  componentDidMount() {
    // this.props.renderList(this.state.list)
  }

  render() {
    return (
      <>
        {/* <div>{this.props.renderList(this.state.list)}</div> */}
        <div>{this.props.children(this.state.list)}</div>
      </>
    )
  }
}
