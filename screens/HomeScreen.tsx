import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MoviesScreen from './MoviesScreen';
import SeriesScreen from './SeriesScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; 

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Movie') {
            iconName = focused ? 'ios-film' : 'ios-film-outline';
          } else if (route.name === 'Series') {
            iconName = focused ? 'ios-tv' : 'ios-tv-outline';
          }

          
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Latest Movie" component={MoviesScreen} />
      <Tab.Screen name="TV Series" component={SeriesScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default HomeScreen;
