import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';

import ListTrendingGames from '../../components/ListTrendingGames';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Favorites() {
  const [favotires, setFavorites] = useState([]);

  useEffect(() => {
    async function loadGamesFavorites() {
      try {
        const storageFavorites = await AsyncStorage.getItem('@game');

        if(storageFavorites){
          const gamesData = await api.get('/games', {
            params: {
              search: storageFavorites,
            }
          });
          setFavorites(gamesData.data);
          console.log(gamesData.data);
        }
      }catch(error) {
        alert('Nao foi possivel carregar os favoritos');
      } 
    }
      loadGamesFavorites()

  }, []);

 return (
   <View style={styles.container}>
    <FlatList
      data={favotires}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <ListTrendingGames dataGames={item} />}
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