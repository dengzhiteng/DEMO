import React, { Component } from 'react'
import { Consumer as ColorConsumer } from './colorContext'
import { Consumer as SizeConsumer } from './sizeContext'

export default class Child extends Component {
  render() {
    return (
      <ColorConsumer>
        {
          (value) => {
            return (
              <SizeConsumer>
                {
                  (value2) => {
                    return (
                      <div style={{color: value.color, fontSize: value2.size}}>hello</div>
                    )
                  }
                }
              </SizeConsumer>
            )
          }
        }
      </ColorConsumer>
    )
  }
}
