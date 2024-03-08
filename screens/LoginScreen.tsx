import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Button } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import MoviesScreen from './MoviesScreen';
import SeriesScreen from './SeriesScreen';


const LoginScreen = ({navigation}) => {
  
  const [userInfo,setUserInfo] = useState<any | null>(null);
  const [error,setError] = useState<any | null>(null);
  
  useEffect(()=>{
    GoogleSignin.configure({webClientId:'89725693724-2mm1i6mcd7f6auvidfleiqbg61rmpveb.apps.googleusercontent.com'});
  },[]);

  // Navigate to home screen if user is logged in
  useEffect(() => {
    if (userInfo) {
      navigation.navigate('Home');
    }
  }, [userInfo]);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const usrInfo = await GoogleSignin.signIn();
      setUserInfo(usrInfo);
    } catch (error) {
      setError(error);
    }
  };

   const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUserInfo(null); 
    } catch (error) {
      console.error(error);
    }
  };

  
  

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Entertainment App</Text>
      {userInfo && <Text style={styles.text}>Welcome, {userInfo.user.name}</Text>}
      {userInfo==null && <Text style={styles.text}>Login to Continue</Text>}
      <TouchableOpacity style={styles.button} onPress={userInfo ? signOut : signIn}>
        <Text style={styles.buttonText}>{userInfo ? 'Sign Out' : 'Sign In'}</Text>
      </TouchableOpacity>
    </View>
    {userInfo && <Button
      onPress={()=>navigation.navigate('Home')}
      title="Go TO Home Entertainment"
      color="#841584"
    />}
    
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#841584',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ECA869',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default LoginScreen;
