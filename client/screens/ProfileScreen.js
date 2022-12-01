import React, { Component } from "react";
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
      phone: 0,
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
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            {/* Button to navigate to home screen */}
            <TouchableHighlight>
            <Image
                  style={styles.icon}
                  source={{
                    uri: "https://www.pngfind.com/pngs/m/73-734715_left-arrow-png-back-arrow-icon-android-transparent.png",
                  }}/>
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

              <Text style={styles.name}>John Doe </Text>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          {/* Name */}
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{ uri: "#" }} />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Name:{this.state.name}</Text>
            </View>
            <TouchableHighlight>
              <Image
                style={styles.icon}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaZahYMhgJM47ENIg34mIKavn1ve1ivGCXGYK5YbdRWiCk65ReUVB_DeF8P07GBC4Dl4&usqp=CAU",
                }}
              />
            </TouchableHighlight>
          </View>
          {/* About */}
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{ uri: "#" }} />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>About Me:{this.state.aboutMe}</Text>
            </View>
            <TouchableHighlight>
              <Image
                style={styles.icon}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaZahYMhgJM47ENIg34mIKavn1ve1ivGCXGYK5YbdRWiCk65ReUVB_DeF8P07GBC4Dl4&usqp=CAU",
                }}
              />
            </TouchableHighlight>
          </View>
          {/* Phone number */}
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{ uri: "#" }} />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Phone:{this.state.phone}</Text>
            </View>
            <TouchableHighlight>
              <Image
                style={styles.icon}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaZahYMhgJM47ENIg34mIKavn1ve1ivGCXGYK5YbdRWiCk65ReUVB_DeF8P07GBC4Dl4&usqp=CAU",
                }}
              />
            </TouchableHighlight>
          </View>
          {/* Email Address */}
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{ uri: "#" }} />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Email address:{this.state.email}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "600",
  },
  body: {
    backgroundColor: "#ffffff",
    height: 500,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
    marginLeft: 30,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#000000",
  },
});
