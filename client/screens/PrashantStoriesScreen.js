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
      data: [
        {
            id: 1,
            avatar: 'https://www.bootdey.com/img/Content/avatar/avatar7.png',
            title: 'Item 1',
            description: 'Description for item 1',
            image: 'https://www.bootdey.com/image/280x280/00FFFF/000000',
            buttons: [
              {
                title: 'Button 1',
                onPress: () => {},
              },
              {
                title: 'Button 2',
                onPress: () => {},
              },
            ],
          },
          {
            id: 2,
            avatar: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
            title: 'Item 1',
            description: 'Description for item 1',
            image: '',
            buttons: [
              {
                title: 'Button 1',
                onPress: () => {},
              },
              {
                title: 'Button 2',
                onPress: () => {},
              },
            ],
          },
          {
            id: 3,
            avatar: 'https://www.bootdey.com/img/Content/avatar/avatar7.png',
            title: 'Item 1',
            description: 'Description for item 1',
            image: 'https://www.bootdey.com/image/280x280/00BFFF/000000',
            buttons: [
              {
                title: 'Button 1',
                onPress: () => {},
              },
              {
                title: 'Button 2',
                onPress: () => {},
              },
            ],
          },
          {
            id: 4,
            avatar: 'https://www.bootdey.com/img/Content/avatar/avatar7.png',
            title: 'Item 1',
            description: 'Description for item 1',
            image: 'https://www.bootdey.com/image/280x280/00FFFF/000000',
            buttons: [
              {
                title: 'Button 1',
                onPress: () => {},
              },
              {
                title: 'Button 2',
                onPress: () => {},
              },
            ],
          }
          
      ],
    };
  }

 

  
  
  renderItem = ({ item, key }) => (
    <View style={styles.card} key={item.unique_id}>
      <Image src={{ uri: item.profileImage }} />
      <Text style={styles.title}>{item.username}</Text>
      <Image src={{ uri: item.postImage }} style={styles.cardImage} />
      <Text style={styles.description}>{item.postMessage}</Text>
    </View>
  );

  render() {
    if (this.state.data != null) {
      return (
        <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{uri:item.avatar}} style={styles.avatar} />
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              {item.image && <Image source={{uri:item.image}} style={styles.image} />}
              {/* <View style={styles.buttonContainer}>
                {item.buttons.map(button => (
                  <Button title={button.title} onPress={button.onPress} />
                ))}
              </View> */}
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      );
    }
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//   },
//   list: {
//     paddingHorizontal: 17,
//     backgroundColor: "#E6E6E6",
//   },
//   separator: {
//     marginTop: 10,
//   },
//   /******** card **************/
//   card: {
//     shadowColor: "#00000021",
//     shadowOffset: {
//       width: 2,
//     },
//     shadowOpacity: 0.5,
//     shadowRadius: 4,
//     marginVertical: 8,
//     backgroundColor: "#fff",
//   },
//   cardHeader: {
//     paddingVertical: 17,
//     paddingHorizontal: 16,
//     borderTopLeftRadius: 1,
//     borderTopRightRadius: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   cardContent: {
//     paddingVertical: 12.5,
//     paddingHorizontal: 16,
//   },
//   cardFooter: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingTop: 12.5,
//     paddingBottom: 25,
//     paddingHorizontal: 16,
//     borderBottomLeftRadius: 1,
//     borderBottomRightRadius: 1,
//     backgroundColor: "#EEEEEE",
//   },
//   cardImage: {
//     flex: 1,
//     height: 150,
//     width: null,
//   },

//   /******** card components **************/

//   title: {
//     fontSize: 18,
//     flex: 1,
//   },
//   description: {
//     fontSize: 15,
//     color: "#888",
//     flex: 1,
//     marginTop: 5,
//     marginBottom: 5,
//   },
//   time: {
//     fontSize: 13,
//     color: "#808080",
//     marginTop: 5,
//   },
//   icon: {
//     width: 25,
//     height: 25,
//   },
//   iconData: {
//     width: 15,
//     height: 15,
//     marginTop: 5,
//     marginRight: 5,
//   },
//   timeContainer: {
//     flexDirection: "row",
//   },

//   /******** social bar ******************/

//   socialBarContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//     flex: 1,
//   },
//   socialBarSection: {
//     justifyContent: "center",
//     flexDirection: "row",
//     flex: 1,
//   },
//   socialBarlabel: {
//     marginLeft: 8,
//     alignSelf: "flex-end",
//     justifyContent: "center",
//   },
//   socialBarButton: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   createPostBtn: {
//     backgroundColor: "#8530d1",
//     color: "#fff",
//     textAlign: "center",
//     lineHeight: "px",
//     margin: "12px",
//     borderTopLeftRadius: "4px",
//     borderBottomRightRadius: "4px",
//     borderBottomLeftRadius: "4px",
//     borderTopRightRadius: "4px",
//     borderTopLeftRadius: "4px",
//     padding: "5px",
//   },
// });

const styles = StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      padding: 20,
      backgroundColor:'#fff'
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
      fontWeight: 'bold',
    },
    description: {
      fontSize: 14,
    },
    image: {
      width: '100%',
      height: 200,
      marginTop: 10,
      borderRadius: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 10,
    },
  });
  