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
            avatar: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg',
            title: 'SM',
            description: 'Beautiful sunny day',
            image: 'https://media.istockphoto.com/id/636825278/photo/wheat-field-and-sunrise-in-the-blue-sky.jpg?s=612x612&w=0&k=20&c=TZz9Aop0SY10MhTkAEjIrzucPWNo3AmdtRXsdl4fH6w=',
          
          },
          {
            id: 2,
            avatar: 'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg',
            title: 'ABC',
            description: 'Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make healthy choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.',
            image: '',
           
          },
          {
            id: 3,
            avatar: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg',
            title: 'SM',
            description: 'The best way to understand reiki is to view it as our “experienced sense of being alive. Reiki therapy is a gentle touch therapy that involves the placing of the therapists or patients hands on various locations on the patients body to promote relaxation and a sense of calm.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOK5AgkYylgr2x3V4_KPe1mz_V0hrwJ6jWGmfDok5r2Xvj0Ut1MyNS0pNIzRJ3l2LD00&usqp=CAU',
           
          },
          {
            id: 4,
            avatar: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg',
            title: 'SM',
            description: 'Meditation can produce a deep state of relaxation and a tranquil mind. During meditation, you focus your attention and eliminate the stream of jumbled thoughts that may be crowding your mind and causing stress. This process may result in enhanced physical and emotional well-being.',
            image: 'https://images.everydayhealth.com/images/emotional-health/meditation/a-complete-guide-to-meditation-722x406.jpg',
           
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
      </ScrollView>
      );
    }
  }
}


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
  