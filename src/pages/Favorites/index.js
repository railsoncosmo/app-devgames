import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import ListTrendingGames from '../../components/ListTrendingGames';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function loadGamesFavorites() {

      const gamesFavorited = await AsyncStorage.getItem('@games');
      console.log(gamesFavorited);

      if(gamesFavorited){
        const gamesFavorites = JSON.parse(gamesFavorited);
        
        const responde = await api.get(`/games/${gamesFavorites.id}`);
        setFavorites([responde.data]);
      }
    }
    loadGamesFavorites()
  }, []);


  if (favorites.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={{color: '#fff', fontSize: 20, textAlign: 'center', marginTop: 40}}>Nenhum jogo favorito encontrado.</Text>
      </View>
    );
  }

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