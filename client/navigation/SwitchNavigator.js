// import {createSwitchNavigator } from "react-navigation";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TopTabNavigator from './TopTabNavigator';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ReikiScreen from '../screens/ReikiScreen';
import YogaScreen from '../screens/YogaScreen';
import MeditationScreen from '../screens/MeditationScreen';
import TherapistScreen from '../screens/TherapistScreen';
const Stack = createNativeStackNavigator();

function SwitchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="TopTabNavigator" component={TopTabNavigator} />
      <Stack.Screen name="ReikiScreen" component={ReikiScreen} />
      <Stack.Screen name="YogaScreen" component={YogaScreen} />
      <Stack.Screen name="MeditationScreen" component={MeditationScreen} />
      <Stack.Screen name="TherapistScreen" component={TherapistScreen} />
    </Stack.Navigator>
  );
}

export default SwitchNavigator