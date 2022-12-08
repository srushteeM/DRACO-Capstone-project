// import {createSwitchNavigator } from "react-navigation";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TopTabNavigator from './TopTabNavigator';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
const Stack = createNativeStackNavigator();

function SwitchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="TopTabNavigator" component={TopTabNavigator} />
    </Stack.Navigator>
  );
}

export default SwitchNavigator