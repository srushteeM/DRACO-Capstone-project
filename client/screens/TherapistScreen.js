import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Linking,
  Platform,
} from "react-native";

class TherapistScreen extends Component {
  openTherapistWebsite = () => {
    Linking.openURL("https://www.helpguide.org/articles/mental-health/finding-a-therapist-who-can-help-you-heal.htm#:~:text=Therapy%20can%20be%20an%20effective,that's%20weighing%20on%20your%20mind.");
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
            source={require("../assets/TherapistLogo.png")}
            style={{ width: "30%", height: "30%", topMargin: "30%" }}
          />
        </View>
        <Text>
        Therapy can be an effective treatment for a host of mental and emotional problems. Simply talking about your thoughts and feelings with a supportive person can often make you feel better. It can be very healing, in and of itself, to voice your worries or talk about something that's weighing on your mind.
        </Text>
        <TouchableHighlight onPress={() => this.openTherapistWebsite()}>
          <Text>Know more...</Text>
        </TouchableHighlight>
        
        <Text>
        Therapists guide you to see how your feelings, thoughts, choices, and actions affect each other. Learn things. Therapists teach lessons about emotions, thoughts, coping skills, facing fears, and more. Parents and caregivers may learn ways to help you too.
        </Text>
        <TouchableHighlight onPress={() => this.openDialScreen()}>
          <Text>Contact Therapist</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default TherapistScreen;
