import React, { Component } from "react";

import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableHighlight,
  FlatList,
} from "react-native";
import firebase from "firebase";
import db from "../config"

class StoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  fetchPosts = async () => {
    // const data = [
    //   {
    //     id: 1,
    //     username: "Planet of Nature",
    //     profileImage:
    //       "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    //     postImage:
    //       "https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    //     postMessage:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    //   },
    //   {
    //     id: 2,
    //     username: "Lampost",
    //     profileImage:
    //       "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    //     postImage:
    //       "https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    //     postMessage:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    //   },
    // ];
    // this.setState({ data: data });
    this.requestRef = db
    .collection("stories")
    .onSnapshot((snapshot) => {
      var stories = snapshot.docs.map((doc) => doc.data());
      this.setState({
        data: stories,
      });
    });
    console.log(this.state.data);
  };
  componentDidMount() {
    this.fetchPosts();
  }
  renderItem = ({ item,key }) => (
    <View style={styles.card} key={this.state.unique_id}>
      <Image src={{ uri: item.profileImage }} />
      <Text style={styles.title}>{item.username}</Text>
      <Image src={{ uri: item.postImage }} style={styles.cardImage} />
      <Text style={styles.description}>{item.postMessage}</Text>
    </View>
  );
  render() {
    if (this.state.data != null) {
      return (
        <View>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("Create Post")}
          >
            <Text>Create Post...</Text>
          </TouchableHighlight>
          <View style={styles.container}>
            <FlatList
              style={styles.list}
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.unique_id}
              ItemSeparatorComponent={() => {
                return <View style={styles.separator} />;
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor: "#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: "white",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor: "#EEEEEE",
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: 100,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
  },
  description: {
    fontSize: 15,
    color: "#888",
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  time: {
    fontSize: 13,
    color: "#808080",
    marginTop: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconData: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginRight: 5,
  },
  timeContainer: {
    flexDirection: "row",
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarSection: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  socialBarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StoriesScreen;
