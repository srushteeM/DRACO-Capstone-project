import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

container:{
  width:'100%',
  height:'100%',
  backgroundColor:'#fff'
},
  
header: {
  position:'relative',
  backgroundColor: "#8530d1",
  minHeight:100,
  borderBottomLeftRadius:50,
  borderBottomRightRadius:50
},

userBox:{
  position:'absolute',
  paddingBottom:'50px',
  height:'100px',
  width:'90%',
},

avatar: {
  width: 80,
  height: 80,
  borderRadius: 63,
  borderWidth: 4,
  borderColor: "lavender",
  backgroundColor:'#fff',
  position:'absolute',
  marginTop:'20%',
  left:'10%',
},


name: {
  position:'absolute',
  textAlign:'center',
  bottom:'-45px',
  left:'35%',
  fontSize: 16,
  color: "#000000",
  fontWeight: "600",
},


editProfile:{
  position:'absolute',
  width: 18,
  height: 18,
  marginTop:'34%',
  right:0,
  zIndex:999
},

body: {
  position:'relative',
  backgroundColor: "#fff",
  height:'100%',
  top:'12%',
  alignItems: "left",
  borderTopLeftRadius:50,
  borderTopRightRadius:50,
  boxShadow: 'rgb(221 221 221) 0 -10px 35px inset;'
},

// UserBox

userNameBox:{
  position:'relative',
  flexDirection:'row',
  padding:'4%',
},

iconUser:{
  width:'25px',
  height:'25px',
  marginLeft: '0'
},

info:{
  position:'relative',
  paddingTop:0,
  paddingLeft:10,
  fontWeight:700,
  fontSize:'100%'
},

// // About Section

aboutBox:{
  position:'relative',
  flexDirection:'row',
  padding:'4%',
},


iconAbout:{
  width:'25px',
  height:'25px',
  marginLeft: '0'
},

aboutEditIcon:{
  position:'absolute',
  width: 18,
  height: 18,
  marginTop:'34%',
},

aboutIconBox:{
  position: 'absolute',
  float: 'right',
  right: '15%'
},

// // Phone section

PhoneBox:{
  position:'relative',
  flexDirection:'row',
  padding:'4%',
},

iconPhone:{
  width:'25px',
  height:'25px',
  marginLeft: '0'
},

iconPhoneEdit:{
  width:'18px',
  position:'absolute',
  width: 18,
  height: 18,
  marginTop:'34%',
},

iconPhoneBox:{
  position: 'absolute',
  float: 'right',
  right: '15%'
},

// // Email section

emailBox:{
  position:'relative',
  flexDirection:'row',
  padding:'4%',
},

iconEmail:{
  width:'25px',
  height:'25px',
  marginLeft: '0'
},

iconEmailEdit:{
  width:'18px',
  position:'absolute',
  width: 18,
  height: 18,
  marginTop:'34%',
},

// save Buttons
saveBtn1:{
  margin: '5%',
  backgroundColor:'#8530d1',
  textAlign: 'center',
  padding: '2%',
  color: '#fff',
  fontSize: '1.2rem',
  fontWeight: '600',
  borderRadius: '8px'
},
// Logout section

logoutTxt:{
  fontWeight: '700',
  marginLeft:'10px',
  fontSize: '100%'
 },

LogoutBox:{
  position:'relative',
  flexDirection:'row',
  padding:'4%',
},

iconLogout:{
  width:'25px',
  height:'25px',
  marginLeft: '0'
},

iconEmailEdit:{
  width:'18px',
  position:'absolute',
  width: 18,
  height: 18,
  marginTop:'34%',
},


bottomWave:{
  position: "absolute",
  width: "100%",
  height: "200px",
  bottom: '0',
  zIndex: '999',
}

});
  
  export { styles }