import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home'
import { ParentHome } from '../screens/parentZone/parentHome'
import { KidsHome } from '../screens/kidZone/kidsHome'
import { Connected } from '../screens/kidZone/Connected'
import {Addpostt} from '../screens/kidZone/Addpost';
import {Call} from '../screens/kidZone/keepcall';
const Stack = createStackNavigator();

export default function AuthStack() {

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Parent Home" component={ParentHome} />
      <Stack.Screen name="Connected" component={Connected} />
      <Stack.Screen name="Addpost" component={Addpostt} />
      <Stack.Screen name="Kids Home" component={KidsHome} />
      <Stack.Screen name="Keepcall" component={Call} />
    </Stack.Navigator>
  );
}