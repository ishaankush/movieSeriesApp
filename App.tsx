import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import MoviesScreen from './screens/MoviesScreen';
import SeriesScreen from './screens/SeriesScreen';


const Stack = createStackNavigator();




const App = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Movies" component={MoviesScreen} />
      <Stack.Screen name="Series" component={SeriesScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );

};

export default App;
