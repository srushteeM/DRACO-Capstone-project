import React, { Component } from 'react';

import { View, Text,TextInput } from 'react-native';

class StoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  fetchPosts = async () => {
    const data = [
      {
        id: 1,
        username: "Planet of Nature",
        profileImage:
          "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        postImage:
          "https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        postMessage:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        id: 2,
        username: "Lampost",
        profileImage:
          "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        postImage:
          "https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        postMessage:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
    ];
    this.setState({ data: data });
  };
  componentDidMount() {
    this.fetchPosts();
  }
  renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image src={{ uri: item.profileImage }} />
      <Text style={styles.title}>{item.username}</Text>
      <Image src={{ uri: item.postImage }} style={styles.cardImage}/>
      <Text style={styles.description}>{item.postMessage}</Text>
    </View>
  );
  render() {

    return (
      <View>
       <TextInput placeholder="Create Post"/>
       <TextInput placeholder="Create Post" />
      </View>
    );
    if (this.state.data != null) {
      return (
        <View>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("CreatePost")}
          >
            <Text>Create Post...</Text>
          </TouchableHighlight>
          <View style={styles.container}>
          <FlatList style={styles.list}
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => {
              return (
                <View style={styles.separator}/>
              )
            }}
          />
          </View>
        </View>
      );
    } else {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }
}


              

export default StoriesScreen;
