// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Daftar from '../screens/Daftar';
import Detail from '../screens/Detail';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*Navigasi ke Homescreen*/}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#FFFFFF',
            },
            headerShadowVisible: false
          }}
        />
        {/*Navigasi ke Daftar*/}
        <Stack.Screen
          name="Daftar"
          component={Daftar}
          options={{
            headerStyle: {
              backgroundColor: '#FFFFFF',
            },
            headerShadowVisible: false
          }}
        />
        {/*Navigasi ke Detail*/}
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerStyle: {
              backgroundColor: '#47a6ff',
            },
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

export default Navigation;