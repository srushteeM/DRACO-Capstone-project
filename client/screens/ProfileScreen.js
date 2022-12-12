import React, { Component } from "react";
import { styles } from "./css/profileScreen";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase";
import db from "../config";
export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: "",
      username: "",
      aboutMe: "",
      phone: " ",
      email: "",
      docId: "",
      aboutMeEditable: false,
      phoneEditable: false,
    };
  }

  // Function to fetch user information from database
  fetchUserData = () => {
    var email = firebase.auth().currentUser.email;
    db.collection("users")
      .where("email", "==", email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            email: data.email,
            username: data.username,

            aboutMe: data.aboutMe,
            phone: data.phone,
            docId: doc.id,
          });
        });
      });
  };
  componentDidMount() {
    this.fetchUserData();
  }

  // Function to change user information in database
  updateUserData = () => {
    db.collection("users").doc(this.state.docId).update({
      username: this.state.username,
      aboutMe: this.state.aboutMe,
      phone: this.state.phone,
    });

    alert("Profile Updated Successfully");
  };

  render() {
    return (
      <View View style={styles.container}>
        <View style={styles.header}>
          {/* Profile picture */}
          <View style={styles.userBox}>
            <Image
              style={styles.avatar}
              source={require("../assets/user.svg")}
            />

            <TouchableHighlight>
              <Image
                style={styles.editProfile}
                source={require("../assets/pencil.svg")}
              />
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.body}>
          {/* Name */}
          <View style={styles.userNameBox}>
            <View>
              <Image
                style={styles.iconUser}
                source={require("../assets/user-icon.svg")}
              />
            </View>
            <View>
              <Text style={styles.info}>Name: {this.state.username}</Text>
            </View>
          </View>

          {/* About */}
          <View style={styles.aboutBox}>
            <View>
              <Image
                style={styles.iconAbout}
                source={require("../assets/chat.svg")}
              />
            </View>
            <View>
              <Text style={styles.info}>About Me:</Text>
              <TextInput
                multiline={true}
                editable={this.state.aboutMeEditable}
                onChangeText={(text) => {
                  this.setState({
                    aboutMe: text,
                  });
                }}
                value={this.state.aboutMe}
              />
            </View>
            <TouchableHighlight
              style={styles.aboutIconBox}
              onPress={() => this.setState({ aboutMeEditable: true })}
            >
              <Image
                style={styles.aboutEditIcon}
                source={require("../assets/pencil.svg")}
              />
            </TouchableHighlight>
          </View>

          {/* Phone number */}
          <View style={styles.PhoneBox}>
            <View>
              <Image
                style={styles.iconPhone}
                source={require("../assets/phone.svg")}
              />
            </View>
            <View>
              <Text style={styles.info}>Phone:</Text>
              <TextInput
                maxLength={10}
                editable={this.state.phoneEditable}
                keyboardType={"numeric"}
                onChangeText={(text) => {
                  this.setState({
                    phone: text,
                  });
                }}
                value={this.state.phone}
              />
            </View>
            <TouchableHighlight
              style={styles.iconPhoneBox}
              onPress={() => this.setState({ phoneEditable: true })}
            >
              <Image
                style={styles.iconPhoneEdit}
                source={require("../assets/pencil.svg")}
              />
            </TouchableHighlight>
          </View>

          {/* Email Address */}
          <View style={styles.emailBox}>
            <View>
              <Image
                style={styles.iconEmail}
                source={require("../assets/mail.svg")}
              />
            </View>
            <View>
              <Text style={styles.info}>Email:{this.state.email}</Text>
              <TouchableHighlight
                // style={styles.button}
                onPress={() => {
                  this.setState({aboutMeEditable:false,phoneEditable:false});
                  this.updateUserData();
                }}
              >
                <Text>Save</Text>
              </TouchableHighlight>
              <TouchableHighlight
                // style={styles.button}
                onPress={() => {
                  
                  this.props.navigation.navigate("Login");
                  firebase.auth().signOut();
                }}
              >
                <Text>Logout</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View>
            <Image
              style={styles.bottomWave}
              source={require("../assets/wave.png")}
            />
          </View>
        </View>
      </View>
    );
  }
}
