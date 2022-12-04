import {createSwitchNavigator } from "react-navigation";
import TopTabNavigator from './TopTabNavigator';
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
const SwitchNavigator = createSwitchNavigator({
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    TopTabNavigator: { screen: TopTabNavigator }
  });
  
  export default SwitchNavigator;