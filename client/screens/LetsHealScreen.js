import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
<<<<<<< HEAD
} from 'react-native';
import { Images } from "../Images";

=======
} from "react-native";
// import { styles } from "./css/login";
>>>>>>> 7a22d31bae7561dfc9c241990f559edebbd59697
export default class LetsHealScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
<<<<<<< HEAD
        {id:1, title: "REIKI", image:"https://cdn-icons-png.flaticon.com/512/3696/3696322.png"},
        {id:2, title: "YOGA", image:"https://cdn-icons-png.flaticon.com/512/2043/2043787.png"},
        {id:3, title: "MEDITATION", image:"https://cdn-icons-png.flaticon.com/512/384/384156.png"} ,
        {id:4, title: "THERAPIST", image:"https://cdn-icons-png.flaticon.com/512/1971/1971437.png"} ,
       
      ]
=======
        {
          id: 1,
          title: "REIKI",
          image: "https://img.icons8.com/color/70/000000/cottage.png",
          screen: "ReikiScreen",
        },
        {
          id: 2,
          title: "YOGA",
          image:
            "https://img.icons8.com/color/70/000000/administrator-male.png",
          screen: "YogaScreen",
        },
        {
          id: 3,
          title: "MEDITATION",
          image: "https://img.icons8.com/color/70/000000/filled-like.png",
          screen: "MeditationScreen",
        },
        {
          id: 4,
          title: "THERAPIST",
          image: "https://img.icons8.com/color/70/000000/facebook-like.png",
          screen: "TherapistScreen",
        },
      ],
>>>>>>> 7a22d31bae7561dfc9c241990f559edebbd59697
    };
  }

  navigate(item) {
    this.props.navigation.navigate(item.screen);
  }

  render() {
    return (
      <View style={styles.container}>
<<<<<<< HEAD
        <View style={styles.logoBox}>
          <Image
              source={require("../assets/logo-heal.png")}
              style={styles.imgLogo}
            />
        </View>
        
        <FlatList style={styles.list}
=======
        <View>
          <Image
            source={require("../assets/logo-heal.png")}
            style={styles.imgLogo}
          />
        </View>
        <FlatList
          style={styles.list}
>>>>>>> 7a22d31bae7561dfc9c241990f559edebbd59697
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => {
            return item.id;
          }}
<<<<<<< HEAD
          

          renderItem={({item}) => {
=======
          renderItem={({ item }) => {
>>>>>>> 7a22d31bae7561dfc9c241990f559edebbd59697
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => {
                  this.navigate(item);
                }}
              >
                <View style={styles.cardFooter}></View>
                <Image style={styles.cardImage} source={{ uri: item.image }} />
                <View style={styles.cardHeader}>
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
<<<<<<< HEAD
            )
          }}/>
          <Image
            source={require("../assets/buttom-shape-hills.svg")}
            style={styles.bottomImg}
          />
=======
            );
          }}
        />
>>>>>>> 7a22d31bae7561dfc9c241990f559edebbd59697
      </View>
    );
  }
}

const styles = StyleSheet.create({
<<<<<<< HEAD

  container:{
    flex:1,
    margin:0,
    backgroundColor:'#fff'
  },

  logoBox:{
    height:"100px",
    width: '100%',
    justifyContent: 'space-evenly',
    display: 'flex',
    marginTop: '15%',
  },



  listContainer:{
    margin:12,
=======
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#E6E6E6",
  },
  listContainer: {
    alignItems: "center",
>>>>>>> 7a22d31bae7561dfc9c241990f559edebbd59697
  },

  /******** card **************/
<<<<<<< HEAD

  card:{
      shadowOffset: {
=======
  card: {
    shadowColor: "#00000021",

    shadowOffset: {
>>>>>>> 7a22d31bae7561dfc9c241990f559edebbd59697
      width: 0,
      height: 2,
    },

<<<<<<< HEAD
    shadowOpacity: 0.300,
    shadowRadius:6,
    elevation: 1,
    marginVertical: 1,
    backgroundColor:"white",
    flexBasis: '50%',
    marginHorizontal:1,
=======
    elevation: 12,
    marginVertical: 10,
    backgroundColor: "white",
    flexBasis: "42%",
    marginHorizontal: 10,
>>>>>>> 7a22d31bae7561dfc9c241990f559edebbd59697
  },

  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
<<<<<<< HEAD

  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
=======
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
>>>>>>> 7a22d31bae7561dfc9c241990f559edebbd59697
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
<<<<<<< HEAD

  cardImage:{
=======
  cardImage: {
>>>>>>> 7a22d31bae7561dfc9c241990f559edebbd59697
    height: 70,
    width: 70,
    alignSelf: "center",
  },
<<<<<<< HEAD

  title:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    // color:"#696969"
  },

  imgLogo:{
    height: '55px',
    width: '175px',
    left: '50%',
    top:'10%',
    zIndex:'9',
    transform: 'translate(-50%, -15px)'
  },

  bottomImg:{
    position:'absolute',
    width:'100%',
    height:'200px',
    bottom:0,
    zIndex:999
  }

});   
=======
  title: {
    fontSize: 18,
    flex: 1,
    alignSelf: "center",
    color: "#696969",
  },
  imgLogo: {
    height: "30px",
    width: "120px",
    left: "50%",
    top: "10%",
    zIndex: "9",
    transform: "translate(-50%, -15px)",
  },
});
>>>>>>> 7a22d31bae7561dfc9c241990f559edebbd59697
