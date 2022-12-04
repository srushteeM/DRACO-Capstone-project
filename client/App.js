import React, { Component } from 'react'
import { createAppContainer } from "react-navigation";
import SwitchNavigator from './navigation/SwitchNavigator'



export default class APP extends Component {
  render() {
    return (
      <AppContainer/>
    )
  }
}


const AppContainer = createAppContainer(SwitchNavigator);