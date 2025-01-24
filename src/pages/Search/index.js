import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import api from '../../services/api';
import ListTrendingGames from '../../components/ListTrendingGames';

export default function Search({ route }) {
  const { searchGame } = route.params;

  const [resultGame, setResultGame] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`/games`, {
        params: {
          page_size: 10,
          search: searchGame
        }
      })
      setResultGame(response.data.results);
    }

    loadData();
    console.log(resultGame);

  }, [searchGame]);

 return (
   <View style={styles.container}>
     <View>
       <FlatList
         data={resultGame}
         keyExtractor={(item) => String(item.id)}
         renderItem={({ item }) => <ListTrendingGames dataGames={item} />}
         showsVerticalScrollIndicator={false}
       />
     </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#050B18',
    }
});