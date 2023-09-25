import React from 'react'

// hoc-higner order components
const addProps = (Comp) => {
  return class extends React.Component {
    render() {
      return (
        <Comp {...this.props} title="hi" msg="world"></Comp>
      )
    }
  }
}

export default addProps