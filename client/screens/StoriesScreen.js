import React, { Component } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  TouchableHighlight,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import firebase from "firebase";
import db from "../config";
export default class StoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[] ,
    };
  }

  componentDidMount = async () => {
    await this.fetchStories();
    console.log(this.state.data)
  };

  fetchStories = async () => {
    var story;
    return db
      .collection("stories")
      .get()
      .then((snapshot) => {
       
        snapshot.forEach((doc) => {
          story = doc.data();
          this.setState({data:[...this.state.data,story]})
        });
      });
     
  };

  render() {
    if (this.state.data != null) {
      return (
        <ScrollView>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("Create Post")}
          >
            <Text style={styles.createPostBtn}>Create Post...</Text>
          </TouchableHighlight>
          <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{uri:item.profileImage}} style={styles.avatar} />
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{item.username}</Text>
              <Text style={styles.description}>{item.postMessage}</Text>
              {item.postImage && <Image source={{uri:item.postImage}} style={styles.image} />}
            
            </View>
          </View>
        )}
        keyExtractor={item => item.unique_id}
      />
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  createPostBtn: {
    backgroundColor: "#8530d1",
    color: "#fff",
    textAlign: "center",
    lineHeight: "px",
    margin: "12px",
    borderTopLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    borderBottomLeftRadius: "4px",
    borderTopRightRadius: "4px",
    borderTopLeftRadius: "4px",
    padding: "5px",
  },
});
