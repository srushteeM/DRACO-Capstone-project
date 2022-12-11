import React, { Component } from "react";
import { Text, View, Image, TouchableHighlight, TextInput } from "react-native";
import { v4 as uuid } from 'uuid';
class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      profileImage: "#",
      postMessage: "",
      postImage: "",
    };
  }
  fetchUserData = () => {};
  fetchImage=()=>{}
  createPost=()=>{
    const unique_id = uuid();
  };
  componentDidMount() {
    this.fetchUserData();
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