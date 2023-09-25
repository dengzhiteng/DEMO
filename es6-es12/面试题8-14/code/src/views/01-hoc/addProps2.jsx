import React from 'react'

// hoc-higner order components
const addProps = (Comp) => {
  return class extends React.Component {
    render() {
      return (
        <Comp {...this.props} name="felixlu"></Comp>
      )
    }
  }
}

export default addProps