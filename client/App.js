import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import ProfileScreen from './screens/ProfileScreen'

export default class APP extends Component {
  render() {
    return (
      <>
        {/* <SignUp /> */}
        <Login />
        {/* <ProfileScreen /> */}
      </>
    )
  }
}

