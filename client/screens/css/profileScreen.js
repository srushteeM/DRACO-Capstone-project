import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
containerParent:{
  width:'100%',
  height:'100vh',
  // backgroundColor:'lightgrey'
},

containerChild:{
  maxWidth:'350px',
  height:'auto',
  position:'relative',
  backgroundColor:'#fff',
  overflow:'hidden',
  left:'50%',
  transform:'translate(-50%, 5%)',
  boxShadow: '0 1px 30px #b3b0b04d'
},

header: {
  position:'relative',
  backgroundColor: "#8530d1",
  minHeight:150,
  borderBottomLeftRadius:50,
  borderBottomRightRadius:50
},

iconBack: {
  width: 30,
  height: 30,
  marginTop: 20,
  marginLeft: 30,
},

userBox:{
 position:'absolute',
 paddingBottom:'50px',
 height:'100px',
 width:'90%'
},

avatar: {
  width: 80,
  height: 80,
  borderRadius: 63,
  borderWidth: 4,
  borderColor: "lavender",
  backgroundColor:'#fff',
  position:'absolute',
  marginTop:'15%',
  left:'10%',
},

name: {
  position:'absolute',
  textAlign:'center',
  bottom:'-25px',
  left:'35%',
  fontSize: 16,
  color: "#000000",
  fontWeight: "600",
},

editProfile:{
  position:'absolute',
  width: 18,
  height: 18,
  marginTop:105,
  right:0,
  zIndex:999
},


body: {
  position:'relative',
  backgroundColor: "#fff",
  height:'100%',
  top:60,
  alignItems: "left",
  borderTopLeftRadius:50,
  borderTopRightRadius:50,
  boxShadow: 'rgb(221 221 221) 0 -10px 35px inset;'
},

userNameBox:{
  position:'relative',
  display:'flex',
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-evenly',
  padding:25,
},

iconUser:{
  width:'25px',
  height:'25px',
  marginLeft: '-60px'
},

info:{
  position:'relative',
  marginLeft:-100,
  marginVertical:5,
  fontWeight:700,
  fontSize:'1rem'
},

nameEditIcon:{
  width:'18px',
  height:'18px',
  top: '5px',
  right: '-55px',
  position: 'absolute',
},

// About Section

userNameBox:{
  position:'relative',
  display:'flex',
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-evenly',
  padding:25,
  borderBottomWidth:'1px',
  borderBottomColor:'#e9e9e9',
  marginLeft: '8px',
  marginRight:'8px'
},

iconAbout:{
  width:'25px',
  height:'25px',
  marginLeft: '-60px'
},

aboutEditIcon:{
  width:'18px',
  height:'18px',
  top: '5px',
  right: '-55px',
  position: 'absolute',
},

aboutEditIcon:{
  width:'18px',
  height:'18px',
  top: '5px',
  right: '-55px',
  position: 'absolute',
},

// Phone section

PhoneBox:{
  position:'relative',
  display:'flex',
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-evenly',
  padding:25,

},

iconPhone:{
  width:'25px',
  height:'25px',
  marginLeft: '-60px'
},

iconPhoneEdit:{
  width:'18px',
  height:'18px',
  top: '5px',
  right: '-55px',
  position: 'absolute',
},

// Email section

emailBox:{
  position:'relative',
  display:'flex',
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-evenly',
  padding:25,
  borderTopWidth:'1px',
  borderTopColor:'#e9e9e9',
  marginLeft: '8px',
  marginRight:'8px'
},

iconEmail:{
  width:'25px',
  height:'25px',
  marginLeft: '-60px'
},

iconEmailEdit:{
  width:'18px',
  height:'18px',
  top: '5px',
  right: '-55px',
  position: 'absolute',
},

bottomWave:{
 width:'100%',
 height:'200px',
 position:'relative',
 zIndex:999
}

});
  
  export { styles }