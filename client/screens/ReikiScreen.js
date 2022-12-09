import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Linking,
  Platform,
} from "react-native";

class ReikiScreen extends Component {
  openReikiWebsite = () => {
    Linking.openURL("https://www.reiki.org/faqs/what-reiki");
  };
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
      <View>
        <View>
          <Image
            source={require("../assets/ReikiLogo.jpg")}
            style={{ width: "30%", height: "30%", topMargin: "30%" }}
          />
        </View>
        <Text>
          Reiki is a Japanese technique for stress reduction and relaxation that
          also promotes healing. The word Reiki is made of two Japanese words -
          Rei which means "God's Wisdom or the Higher Power" and Ki which is
          "life force energy". So Reiki is actually "spiritually guided life
          force energy." A treatment feels like a wonderful glowing radiance
          that flows through and around you. Reiki treats the whole person
          including body, emotions, mind and spirit creating many beneficial
          effects that include relaxation and feelings of peace, security and
          wellbeing. Many have reported miraculous results. Reiki is a simple,
          natural and safe method of spiritual healing and self-improvement that
          everyone can use. It has been effective in helping virtually every
          known illness and malady and always creates a beneficial effect. It
          also works in conjunction with all other medical or therapeutic
          techniques to relieve side effects and promote recovery.
        </Text>
        <TouchableHighlight onPress={() => this.openReikiWebsite()}>
          <Text>Know more...</Text>
        </TouchableHighlight>
        <Text>
          A reiki master is someone who has been attuned to the highest level of
          reiki. The attunement process opens up your body so that you're able
          to transmit healing energy, and lasts for your entire life.
        </Text>
        <TouchableHighlight onPress={() => this.openDialScreen()}>
          <Text>Contact Reiki Master</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ReikiScreen;
