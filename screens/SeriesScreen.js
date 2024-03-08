import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import LoginScreen from './LoginScreen';
const fetch = require('node-fetch');

const SeriesScreen = () => {
  
  const [seriesList, setSeriesList] = useState([]);

  const getSeries = () => {
    const url = 'https://api.themoviedb.org/3/discover/tv?api_key=f26e8c80288e4daef420098c7da0cf5f';
    fetch(url)
      .then(res => res.json())
      .then(json => setSeriesList(json.results))
      .catch(err => console.error('error:' + err));
  }
 
  useEffect(() => {
    getSeries();
  }, [])
  
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        
        {seriesList.map((series, index) => (
          <View key={index} style={styles.seriesCard}>
            <Image
              style={styles.poster}
              source={{uri: `https://image.tmdb.org/t/p/w500/${series.poster_path}`}}
            />
            <View style={styles.seriesDetails}>
              <Text style={styles.title}>{series.name}</Text>
              <Text style={styles.overview}>{series.overview}</Text>
              <Text style={styles.releaseDate}>First Air Date: {series.first_air_date}</Text>
              <Text style={styles.rating}>Rating: {series.vote_average}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BFCFE7',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B08BBB',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#124076',
    marginBottom: 15,
    paddingHorizontal: 100,
    backgroundColor: '#ECA869'
  },
  seriesCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    padding: 10,
    backgroundColor: '#FFEEF4',
  },
  poster: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  seriesDetails: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  overview: {
    marginBottom: 5,
  },
  releaseDate: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
  rating: {
    fontWeight: 'bold',
  },
});

export default SeriesScreen;
