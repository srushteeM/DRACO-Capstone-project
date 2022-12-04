import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  Platform,
  Linking,
} from "react-native";

export default class CompanionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  openDialScreen = () => {
    let number = "";
    if (Platform.OS === "ios") {
      number = "telprompt:18005990019";
    } else {
      number = "tel:18005990019";
    }
    Linking.openURL(number);
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={require("../assets/logo-heal.png")}
            style={styles.imgLogo}
          />
        </View>
        <View>
          <Text>
            When you are feeling alone and need someone to talk to, please don't
            hesitate to reach out and talk to us. We are here for you and want
            to be a companion. We want you to know that whatever you are going
            through we are with you and nothing you say will make us judge you.
            We are here to listen and provide support as much as we can. We
            understand that it is not easy to open up and talk about what you
            are going through.We will be here to provide comfort and support.
          </Text>
        </View>
        <TouchableHighlight onPress={() => this.openDialScreen()}>
          <Image
            source={{
              uri: "https://t4.ftcdn.net/jpg/04/63/63/59/360_F_463635935_IweuYhCqZRtHp3SLguQL8svOVroVXvvZ.jpg",
            }}
            style={{ width: "100px", height: "100px" }}
          />
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  imgLogo: {
    height: "30px",
    width: "120px",
    left: "50%",
    top: "10%",
    zIndex: "9",
    transform: "translate(-50%, -15px)",
  },
});
