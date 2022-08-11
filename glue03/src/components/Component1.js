import React, { Component } from 'react'

import Component2 from './Component2'
import Component3 from './Component3'

export default class Component1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEnabled: true,
        }
    }

    disableButton = () =>{
        this.setState({isEnabled: false}, ()=>console.log('disable button clicked'))
    }

    enableButton =() =>{
        this.setState({isEnabled: true}, ()=>console.log('enable button clicked'))
    }

    render() {
    return (
        <>
            <Component2 isEnabled={this.state.isEnabled} disableFunc={this.disableButton} enableFunc={this.enableButton}></Component2>
            <Component3 isEnabled={this.state.isEnabled}/>
        </>
    )
  }
}
