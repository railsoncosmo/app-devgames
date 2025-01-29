import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import api from '../../services/api';
import ListTrendingGames from '../../components/ListTrendingGames';

export default function Search({ route }) {
  const { searchGame } = route.params;

  const [resultGame, setResultGame] = useState([]);
  const [listEmpty, setListEmpty] = useState(false);

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`/games`, {
        params: {
          search: searchGame,
          page_size: 10,
        }
      })
      if (response.data.results.length === 0) {
        setListEmpty(true);
      }else{
        setListEmpty(false);
        setResultGame(response.data.results);
      }
    }

    loadData();

  }, [searchGame]);

  if (listEmpty) {
    return (
      <View style={styles.container}>
        <Text style={{ color: '#fff' }}>Não encontramos um jogo com esse nome...</Text>
      </View>
    );
  }

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