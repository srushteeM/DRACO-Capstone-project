import React, { Component } from 'react'
<<<<<<< HEAD
import { Text, View } from 'react-native'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import ProfileScreen from './screens/ProfileScreen'
=======
import { createAppContainer } from "react-navigation";
import SwitchNavigator from './navigation/SwitchNavigator'


>>>>>>> master

export default class APP extends Component {
  render() {
    return (
<<<<<<< HEAD
      <>
        {/* <SignUp /> */}
        {/* <Login /> */}
        <ProfileScreen />
      </>
=======
      <AppContainer/>
>>>>>>> master
    )
  }
}


const AppContainer = createAppContainer(SwitchNavigator);