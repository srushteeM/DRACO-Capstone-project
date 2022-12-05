import React, { Component } from "react";
import { styles } from "./css/profileScreen";
import { StyleSheet, Text, View, Image, TouchableHighlight, } from "react-native";

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: "",
      username: "",
      aboutMe: "",
      phone:" ",
      email: "",
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
<<<<<<< HEAD
        <View style={styles.containerParent}>
          <View style={styles.containerChild}>
            <View style={styles.header}>
                {/* Button to navigate to home screen */}
                <TouchableHighlight>
                <Image style={styles.iconBack} source={require('../assets/back-arrow.png')}/>
                </TouchableHighlight>
              <View style={styles.headerContent}>
=======
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            {/* Button to navigate to home screen */}
            <TouchableHighlight>
              <Image
                style={styles.icon}
                source={{
                  uri: "https://www.pngfind.com/pngs/m/73-734715_left-arrow-png-back-arrow-icon-android-transparent.png",
                }}
              />
            </TouchableHighlight>
            {/* Profile picture */}
            <View>
              <Image
                style={styles.avatar}
                source={{
                  uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
                }}
              />
              <TouchableHighlight>
                <Image
                  style={styles.icon}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaZahYMhgJM47ENIg34mIKavn1ve1ivGCXGYK5YbdRWiCk65ReUVB_DeF8P07GBC4Dl4&usqp=CAU",
                  }}
                />
              </TouchableHighlight>
>>>>>>> master

                {/* Profile picture */}
                <View style={styles.userBox}>
                  <Image style={styles.avatar} source={require('../assets/user.svg')} />
                  <Text style={styles.name}>John Doe</Text>
                    <TouchableHighlight>
                      <Image style={styles.editProfile} source={require('../assets/pencil.svg')} />
                    </TouchableHighlight>
                </View>
              </View>
            </View>

            <View style={styles.body}>
              {/* Name */}
              <View style={styles.userNameBox}>
                <View>
                  <Image style={styles.iconUser} source={require('../assets/user-icon.svg')} />
                </View>
                <View>
                  <Text style={styles.info}>Name{this.state.name}</Text>
                </View>
                <TouchableHighlight>
                  <Image style={styles.nameEditIcon} source={require('../assets/pencil.svg')} />
                </TouchableHighlight>
              </View>
            
              {/* About */}
              <View style={styles.userNameBox}>
                <View>
                  <Image style={styles.iconAbout} source={require('../assets/chat.svg')} />
                </View>
                <View>
                  <Text style={styles.info}>About Me{this.state.aboutMe}</Text>
                </View>
                <TouchableHighlight>
                  <Image style={styles.aboutEditIcon} source={require('../assets/pencil.svg')} />
                </TouchableHighlight>
              </View>

              {/* Phone number */}
              <View style={styles.PhoneBox}>
                <View>
                  <Image style={styles.iconPhone} source={require('../assets/phone.svg')}  />
                </View>
                <View>
                  <Text style={styles.info}>Phone{this.state.phone}</Text>
                </View>
                <TouchableHighlight>
                  <Image style={styles.iconPhoneEdit} source={require('../assets/pencil.svg')} />
                </TouchableHighlight>
              </View>

              {/* Email Address */}
              <View style={styles.emailBox}>
                <View>
                  <Image style={styles.iconEmail} source={require('../assets/mail.svg')}  />
                </View>
                <View>
                  <Text style={styles.info}>Email address{this.state.email}</Text>
                </View>
                <TouchableHighlight>
                  <Image style={styles.iconEmailEdit} source={require('../assets/pencil.svg')} />
                </TouchableHighlight>
              </View>
              <View>
                <Image style={styles.bottomWave} source={require('../assets/wave.png')} />
              </View>
            </View>
          </View>
        </View>
    );
  }
}

