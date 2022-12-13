import React, { Component } from "react";
import { Text, View, Image, TouchableHighlight, TextInput } from "react-native";
import { v4 as uuid } from "uuid";
import firebase from "firebase";
import db from "../config";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: firebase.auth().currentUser.email,
      username: "",
      profileImage: "#",
      postMessage: "",
      postImage: "",
    };
  }
  fetchUserData = async() => {
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
            //profileImage: doc.data().profileImage,

            docId: doc.id,
          });
        });
      });

      var storageRef =  firebase
      .storage()
      .ref()
      .child("user_profiles/" + this.state.username);

    // Get the download URL
    await storageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({ profileImage: url });
      })
      .catch((error) => {
        this.setState({ profileImage: "#" });
      });
  };

  fetchImage =  async () => {
   
  };

  createPost = () => {
    const unique_id = uuid();
    db.collection("stories").add({
      unique_id: unique_id,
      username: this.state.username,
      profileImage: this.state.profileImage,
postMessage: this.state.postMessage,
    });
    this.setState({ 
      postMessage:"",
      postImage:""
    })
  };

  componentDidMount() {
    this.fetchUserData();
    //this.fetchImage();
  }
  render() {
    return (
      <View>
        {/* Profile picture */}
        <Image src={{ uri: this.state.profileImage }} />
        {/* Username */}
        <Text>{this.state.username}</Text>
        {/* Input box for post message */}
        <TextInput
          placeholder="What's on your mind?"
          multiline={true}
          value={this.state.postMessage}
          onChangeText={(text) => this.setState({ postMessage: text })}
        />
        {/* Button to upload Image */}
        <TouchableHighlight onPress={() => this.fetchImage()}>
          <Text>Upload Image</Text>
        </TouchableHighlight>
        {/* Button to create post */}
        <TouchableHighlight onPress={() => this.createPost()}>
          <Text>Post</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default CreatePost;
/*
format of data to be saved in database.
{
    id:""
    username:"",
    profileImage:"",
    postImage:"",
    postText:""
}

*/
