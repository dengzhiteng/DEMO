import React, { Component } from 'react'
import Child from './Child'

export default class Demo extends Component {
  renderList(list) {
    return (
      <ul>
        {
          list.map((li, index) => {
            return (
              <li key={li.id}>{li.name}</li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <>
        {/* <Child renderList={this.renderList}></Child> */}
        <Child>
          {
            (list) => {
              return (
                <ul>
                  {
                    list.map((li, index) => {
                      return (
                        <li key={li.id}>{li.name}</li>
                      )
                    })
                  }
                </ul>
              )
            }
          }
        </Child>
      </>
    )
  }
}