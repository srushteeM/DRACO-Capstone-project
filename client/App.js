import React, { Component } from 'react'
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import TopTabNavigator from './navigation/TopTabNavigator';
import Login from './screens/Login'
import SignUp from './screens/SignUp'


export default class APP extends Component {
  render() {
    return (
      <AppContainer/>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  TopTabNavigator: { screen: TopTabNavigator }
});

const AppContainer = createAppContainer(switchNavigator);