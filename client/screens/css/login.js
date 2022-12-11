import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

parentBox: {
    position:'relative',
    // backgroundColor:'lavender',
    height:'100%'
},

childBox:{
    backgroundColor:'white',
    maxHeight:'auto',
    // maxWidth:'350px',
    position:'relative',
    left:'50%',
<<<<<<< HEAD
    transform: 'translate(-50%, 0%)',
    padding:'0',
    // boxShadow: '0 1px 30px rgb(197 197 197 / 30%)'
=======
    transform: 'translate(-50%, 0px)',
    padding:'0px',
    boxShadow: '0 1px 30px rgb(197 197 197 / 30%)'
>>>>>>> 7a22d31bae7561dfc9c241990f559edebbd59697
},

welcomeText:{
    color:'#000',
    backgroundColor: '#eee9f2',
    textAlign: 'center',
    fontWeight: '500',
    width: 'fit-content',
    borderRadius: '25px',
    paddingTop: '5px',
    paddingRight: '15px',
<<<<<<< HEAD
    paddingLeft:'15px',
=======
    paddingLeft: '15px',
>>>>>>> 7a22d31bae7561dfc9c241990f559edebbd59697
    paddingBottom: '5px',
    position: 'relative',
    marginTop: '10px',
    left:'50%',
    transform: 'translate(-50%, 0%)'
},

inputField:{
    position:'relative',
    outLine:'none',
    border:0,
    paddingTop: '12px',
    paddingLeft: '40px',
    paddingRight: '40px',
    paddingBottom: '12px',
    marginTop: '20px',
    marginLeft: '25px',
    marginRight:'25px',
    borderRadius: '50px',
    fontWeight: 600,
    color: '#666666',
    fontSize: '0.8rem',
    backgroundColor:'#eee9f2',
},

forgotText:{
    textAlign:'right',
    color:'#838383',
    marginTop:'15px',
    fontWeight:500,
    position:'relative',
    right:'30px'
},

btnSignUp:{
    backgroundColor:'#8530d1',
    borderRadius:'25px',
    left:'50%',
    width:'88%',
    padding:'10px',
    boxShadow: '0 1 18 rgb(133 48 209 / 51%)',
    transform: 'translate(-50%, 15px);'
},

btnSignUpText:{
    fontWeight:'500',
    color: '#fff',
    fontSize: '0.8rem',
    textAlign:'center',
    textTransform:'uppercase'
},

signUpText:{
    textAlign:'center',
    color:'#838383',
    marginTop:'25px',
    fontWeight:'500' 
},

signUpLink:{
    color:'#8530d1',
    fontWeight:'700'
},

// Top left circle shape image
imgCircle:{
    height:'130px',
    width:'130px',
    position:'absolute',
    left:'0',
    top:'0',
    // backGround:'no-repeat'
},  

// logo img
imgLogo:{
    height: '30px',
    width: '120px',
    left: '50%',
    top:'8%',
    zIndex:'9',
    transform: 'translate(-50%, -15px)'
},

// Input icons
imgIcon:{
    position:'absolute',
    height:'20px',
    width:'20px',
    zIndex:'9',
    top: '50%',
    left: '10%',
},

// Bottom wave image   

bottomImg:{
    width:'100%',
    height:'110px',
    zIndex:'99'
},

// login image
imgLogin:{
    height:'175px',
    width:'295px',
    marginBottom:'70px',
    left:'50%',
    transform: 'translate(-50%, 60px)'
},

// Right circle shape
imgShape:{
    height: '130px',
    width:'70px',
    position: 'absolute',
    right: '0',
    top: '15%',
    opacity: '0.5'
}

});

export { styles }