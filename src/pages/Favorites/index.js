import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import ListTrendingGames from '../../components/ListTrendingGames';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function loadGamesFavorites() {

      const gamesFavorited = await AsyncStorage.getItem('@game');

      if(gamesFavorited){
        const gamesFavorites = JSON.parse(gamesFavorited);
        
        const games = await Promise.all(
          gamesFavorites.map(async id => {
          const response = await api.get(`/games/${id}`);
          return response.data;  
      }));
        setFavorites(games);
      }
    }
    loadGamesFavorites()
  }, []);

 return (
   <View style={styles.container}>

    <FlatList
      data={favorites}
      contentContainerStyle={{paddingHorizontal: 10, paddingBottom: 10}}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <ListTrendingGames dataGames={item} />}
      showsVerticalScrollIndicator={false}
    />

   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#050B18',
    }
});