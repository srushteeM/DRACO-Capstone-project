import React, { Component } from "react";
import './css/signup.js';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image, Alert} from "react-native";
import { styles } from "./css/signup";
import AppLogo from "../components/AppLogo";
import {Images} from '../Images';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  render() {
    return (
      <View style={styles.parentBox} >
        {/* Logo of the app */}
        <AppLogo />

        {/* Image on the signup page */}
        <View style={styles.childBox}>
          <Image source={require('../assets/circle-top.png')} style={styles.imgCircle} />
          <Image source={require('../assets/logo-heal.png')} style={styles.imgLogo} />
          <Image source={require('../assets/signup-img.svg')} style={styles.imgYoga} />
          <Image source={require('../assets/right-shape.png')} style={styles.imgShape} />
          <View >
            <Image source={require('../assets/user.jpeg')} style={styles.imgIcon} />
            <TextInput placeholder="Username " style={styles.inputField} underlineColorAndroid="transparent" onChangeText={(name) => this.setState({ username: name })} />
          </View>

          <View>
            <Image source={require('../assets/icon-mail.png')} style={styles.imgIcon} />
            <TextInput  placeholder="Email Address" style={styles.inputField} keyboardType="email-address" underlineColorAndroid="transparent" onChangeText={(email) => this.setState({ email: email })} />
          </View>

          <View >
            <Image source={require('../assets/icon-lock.png')} style={styles.imgIcon} />
            <TextInput placeholder="Password" style={styles.inputField} secureTextEntry={true}  underlineColorAndroid="transparent" onChangeText={(password) => this.setState({ password: password })} />
          </View>

          <View>
            <Image source={require('../assets/icon-lock.png')} style={styles.imgIcon} />
            <TextInput placeholder="Confirm Password" style={styles.inputField} underlineColorAndroid="transparent" onChangeText={(confirmPassword) =>this.setState({ confirmPassword: confirmPassword })} />
          </View>

          <TouchableHighlight style={styles.btnSignUp} onPress={() => this.onClickListener("login")}>
            <Text style={styles.btnSignUpText}>SignUp</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.onClickListener("register")}>
            <Text style={styles.btnSignInText}>Already have an account ? <Text style={styles.signInLink}>Signin</Text></Text>
          </TouchableHighlight>
          <Image source={require('../assets/wave.png')} style={styles.bottomImg} />
        </View>
      </View>
    );
  }
}
