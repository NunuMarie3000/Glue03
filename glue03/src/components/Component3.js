//child of component1
import React, { Component } from 'react'

export default class Component3 extends Component {
  render() {
    return (
      <>
        {this.props.isEnabled ? <h1>This button is enabled!</h1> : <h1>This button is disabled!</h1>}
      </>
    )
  }
}
