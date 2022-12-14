import React, { Component } from 'react';
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
  FlatList
} from "react-native";
import firebase from "firebase";
import db from "../config"
export default class StoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, color:"#FF4500", icon:"https://bootdey.com/img/Content/avatar/avatar1.png", name: "User 1", tags:['tag 1', 'tag 2', 'tag 3', 'Mobile dev', 'RN', 'Bootdey']},
        {id:2, color:"#87CEEB", icon:"https://bootdey.com/img/Content/avatar/avatar2.png", name: "User 2", tags:['tag 1', 'tag 2', 'tag 3', 'Dey-Dey', 'Developer']}, 
        {id:3, color:"#4682B4", icon:"https://bootdey.com/img/Content/avatar/avatar3.png", name: "User 3", tags:['tag 1', 'tag 2', 'tag 3']}, 
        {id:4, color:"#6A5ACD", icon:"https://bootdey.com/img/Content/avatar/avatar4.png", name: "User 4", tags:['tag 1', 'tag 2', 'tag 3']},   
      ],
    };
  }

  cardClickEventListener = (item) => {
    Alert.alert(item.name);
  }

  tagClickEventListener = (tagName) => {
    Alert.alert(tagName);
  }

  renderTags = (item) =>{
    return item.tags.map((tag, key) => {
      return (
        <TouchableOpacity key={key} style={styles.btnColor} onPress={() => {this.tagClickEventListener(tag)}}>
          <Text>{tag}</Text>
        </TouchableOpacity> 
      );
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/search/androidL/100/000000'}}/>
            <TextInput style={styles.inputs}
              ref={'txtSearch'}
              placeholder="Search"
              underlineColorAndroid='transparent'
              onChangeText={(name_address) => this.setState({name_address})}/>
          </View>
        </View>

        <FlatList 
          style={styles.notificationList}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {borderColor:item.color}]} onPress={() => {this.cardClickEventListener(item)}}>
                <View style={styles.cardContent}>
                  <Image style={[styles.image, styles.imageContent]} source={{uri: item.icon}}/>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <View style={[styles.cardContent, styles.tagsContent]}>
                  {this.renderTags(item)}
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }

  fetchPosts = async () => {
  
    this.requestRef = db
    .collection("stories")
    .onSnapshot((snapshot) => {
      var stories = snapshot.docs.map((doc) => doc.data());
      console.log(stories);
      this.setState({
        data: stories,
      });
    });
   
  };


  componentDidMount() {
    this.fetchPosts();
  }


  renderItem = ({ item,key }) => (
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
        <View>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("Create Post")}
          >
            <Text style={styles.createPostBtn} >Create New Post</Text>
          </TouchableHighlight>
          <View style={styles.container}>
            <FlatList
              style={styles.list}
             // key={this.state.unique_id}
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={(item,index) => index.toString()}
              ItemSeparatorComponent={() => {
                return <View style={styles.separator} />;
              }}
            />
            </View>
      </View>
    )
  }
}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2, 
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"#fff",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor:"#EEEEEE",
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },

  /******** card components **************/

  title:{
    fontSize:18,
    flex:1,
  }, 
  description:{
    fontSize:15,
    color:"#888",
    flex:1,
    marginTop:5,
    marginBottom:5,
  },
  time:{
    fontSize:13,
    color: "#808080",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  iconData:{
    width:15,
    height:15,
    marginTop:5,
    marginRight:5
  },
  timeContainer:{
    flexDirection:'row'
  },

  /******** social bar ******************/
  
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  createPostBtn:{
      backgroundColor:'#8530d1',
      color:'#fff',
      textAlign:'center',
      lineHeight:'px',
      margin:'12px',
      borderTopLeftRadius:'4px',
      borderBottomRightRadius:'4px',
      borderBottomLeftRadius:'4px',
      borderTopRightRadius:'4px',
      borderTopLeftRadius:'4px',
      padding:'5px'
  }

});    