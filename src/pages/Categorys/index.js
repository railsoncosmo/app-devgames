import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import api from '../../services/api';
import ListTrendingGames from '../../components/ListTrendingGames';

export default function Categorys({ route }) {
  const { data } = route.params;

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`/games`, {
        params: {
          page_size: 10,
          genres: data?.id
        }
      })
      setGenres(response.data.results);
    }

    loadData();

  }, [data?.id]);

 return (
   <View style={styles.container}>
     <View>
      <FlatList
        data={genres}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <ListTrendingGames dataGames={item} />}
        
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