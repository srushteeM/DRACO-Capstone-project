import React, { Component } from "react";
import { styles } from "./css/profileScreen";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: "",
      username: "",
      aboutMe: "",
      phone: " ",
      email: "",
      logout: "",
    };
  }

  // Function to fetch user information from database
  fetchUserData = () => {};
  componentDidMount() {
    this.fetchUserData();
  }

  // Function to change user information in database
  updateUserData = (info_type, info) => {};

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
              <Text style={styles.name}>John Doe</Text>
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
                <Text style={styles.info}>Name:{this.state.name}</Text>
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
                <Text style={styles.info}>About Me:{this.state.aboutMe}</Text>
              </View>
              <TouchableHighlight style={styles.aboutIconBox}>
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
                <Text style={styles.info}>Phone:{this.state.phone}</Text>
              </View>
              <TouchableHighlight style={styles.iconPhoneBox}>
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
                <Text style={styles.info}>
                  Email address:{this.state.email}
                </Text>
              </View>
            </View>
            {/* Logout */}
            <View style={styles.logoutBox}>
              <View>
                <Image
                  style={styles.iconLogout}
                  source={"https://cdn-icons-png.flaticon.com/512/4034/4034329.png"}
                />
              </View>
              <View>
                <Text style={styles.info}>
                  Logout{this.state.logout}
                </Text>
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
