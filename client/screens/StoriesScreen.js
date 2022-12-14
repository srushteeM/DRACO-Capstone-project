import React, { Component } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  TouchableHighlight,
  FlatList,
  View,
  Text,Image
} from "react-native";
import firebase from "firebase";
import db from "../config"
export default class StoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        
      ],
    };
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
            <Text>Create Post...</Text>
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
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white"
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
  }
});  
                  
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#EBEBEB',
//   },
//   formContent:{
//     flexDirection: 'row',
//     marginTop:30,
//   },
//   inputContainer: {
//     borderBottomColor: '#F5FCFF',
//     backgroundColor: '#FFFFFF',
//     borderRadius:30,
//     borderBottomWidth: 1,
//     height:45,
//     flexDirection: 'row',
//     alignItems:'center',
//     flex:1,
//     margin:10,
//   },
//   icon:{
//     width:30,
//     height:30,
//   },
//   iconBtnSearch:{
//     alignSelf:'center'
//   },
//   inputs:{
//     height:45,
//     marginLeft:16,
//     borderBottomColor: '#FFFFFF',
//     flex:1,
//   },
//   inputIcon:{
//     marginLeft:15,
//     justifyContent: 'center'
//   },
//   notificationList:{
//     marginTop:20,
//     padding:10,
//   },
//   card: {
//     height:null,
//     paddingTop:10,
//     paddingBottom:10,
//     marginTop:5,
//     backgroundColor: '#FFFFFF',
//     flexDirection: 'column',
//     borderTopWidth:40,
//     marginBottom:20,
//   },
//   cardContent:{
//     flexDirection:'row',
//     marginLeft:10, 
//   },
//   imageContent:{
//     marginTop:-40,
//   },
//   tagsContent:{
//     marginTop:10,
//     flexWrap:'wrap'
//   },
//   image:{
//     width:60,
//     height:60,
//     borderRadius:30,
//   },
//   name:{
//     fontSize:20,
//     fontWeight: 'bold',
//     marginLeft:10,
//     alignSelf: 'center'
//   },
//   btnColor: {
//     padding:10,
//     borderRadius:40,
//     marginHorizontal:3,
//     backgroundColor: "#eee",
//     marginTop:5,
//   },
// });  