import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image, Alert } from "react-native";
//import { Stack, TextInput, IconButton } from "@react-native-material/core";
//import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import AppLogo from "../components/AppLogo";
import { styles } from "./css/login";
import {Images} from '../Images';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  render() {
    return (
      
      <View  style={styles.parentBox}>
        {/* Logo of the app */}
        <AppLogo />
          <View style={styles.childBox}>
            <Image source={require('../assets/circle-top.png')} style={styles.imgCircle} />
            <Image source={require('../assets/logo-heal.png')} style={styles.imgLogo} />
            <Image source={require('../assets/login-img.svg')} style={styles.imgLogin} />
            <Image source={require('../assets/right-shape.png')} style={styles.imgShape} />
            {/* Image on the login page */}
            <Text style={styles.welcomeText}>Hi! Please login to your account</Text>
            {/* <Image source={{ uri: "#" }} /> */}

            {/* Email address input */}
            <View>
              <Image source={require('../assets/user.jpeg')} style={styles.imgIcon} />
              <TextInput style={styles.inputField} placeholder="Email" keyboardType="email-address" underlineColorAndroid="transparent" onChangeText={(email) => this.setState({ email: email })}/>
            </View>

            {/* Password address input */}
            <View>
              <Image source={require('../assets/icon-lock.png')} style={styles.imgIcon} />
              <TextInput placeholder="Password" style={styles.inputField} secureTextEntry={true} underlineColorAndroid="transparent" onChangeText={(password) => this.setState({ password: password })} />
            </View>

            {/* Forgot Password Button */}
            <TouchableHighlight onPress={() => this.onClickListener("forgot_password")}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableHighlight>

            {/* Login Button */}
            <TouchableHighlight style={styles.btnSignUp} onPress={() => this.onClickListener("login")}>
              <Text style={styles.btnSignUpText}>SIGNIN</Text>
            </TouchableHighlight>

            {/* Signup Button */}
            <TouchableHighlight onPress={() => this.onClickListener("signUp")}>
              <Text style={styles.signUpText}>Don't have an account? <Text style={styles.signUpLink}>SignUp</Text></Text>
            </TouchableHighlight>
            <Image source={require('../assets/wave.png')} style={styles.bottomImg} />
          </View>
      </View>
    );
  }
}

