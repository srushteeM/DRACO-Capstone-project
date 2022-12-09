import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Linking,
  Platform,
} from "react-native";

class MeditationScreen extends Component {
  openMeditationWebsite = () => {
    Linking.openURL("https://www.verywellmind.com/what-is-meditation-2795927");
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
            source={require("../assets/MeditationLogo.jpg")}
            style={{ width: "30%", height: "30%", topMargin: "30%" }}
          />
        </View>
        <Text>
          Meditation is a practice in which an individual uses a technique such
          as mindfulness, or focusing the mind on a particular object, thought,
          or activity to train attention and awareness, and achieve a mentally
          clear and emotionally calm and stable state. Meditation is practiced
          in numerous religious traditions. The earliest records of meditation
          (dhyana) are found in the Upanishads, and meditation plays a salient
          role in the contemplative repertoire of Jainism, Buddhism and
          Hinduism.[5] Since the 19th century, Asian meditative techniques have
          spread to other cultures where they have also found application in
          non-spiritual contexts, such as business and health. Meditation may
          significantly reduce stress, anxiety, depression, and pain, and
          enhance peace, perception,self-concept, and well-being. Research is
          ongoing to better understand the effects of meditation on health
          (psychological, neurological, and cardiovascular) and other areas.
        </Text>
        <TouchableHighlight onPress={() => this.openMeditationWebsite()}>
          <Text>Know more...</Text>
        </TouchableHighlight>
        <Text>
          A meditation coach is typically someone that's right there next to you
          as a guide–someone who's walking the path with you. The coach knows
          what you need to do to thrive and can help you blaze a new trail for a
          life you want to create.
        </Text>
        <TouchableHighlight onPress={() => this.openDialScreen()}>
          <Text>Contact Meditation Coach</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default MeditationScreen;
