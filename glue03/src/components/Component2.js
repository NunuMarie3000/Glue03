//child of component 1
import React, { Component } from 'react'

import Button from 'react-bootstrap/Button'

export default class Component2 extends Component {
  render() {
    return (
      <>
        {this.props.isEnabled ? <Button onClick={this.props.disableFunc} variant='warning'>Disable</Button>:<Button onClick={this.props.enableFunc} variant='primary'>Enable</Button>}
      </>
    )
  }
}
