import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import api from '../../services/api';

import ListTrendingGames from '../../components/ListTrendingGames';
import ListCategory from '../../components/ListCategory';
import Feather from 'react-native-vector-icons/Feather';

export default function Home() {
  const [categorys, setCategorys] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    let isActive = true;

    async function loadData() {
      try {
        const [categorys, games] = await Promise.all([
          api.get('/genres'),
          api.get('/games', {
            params: {
              page_size: 10,
            },
          }),
        ]);
        if (isActive) {
          setCategorys(categorys.data.results);
          setGames(games.data.results);
        }
      } catch (error) {
        console.log('Não foi possivel carregar os dados', error);
      }
    }

    loadData();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerHome}>
        <Text style={styles.logoTextPrimary}>
          Dev
          <Text style={styles.logoTextSecundary}>Games</Text>
        </Text>

        <TouchableOpacity style={styles.buttonFavorite}>
          <Feather name="bookmark" size={30} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.containerSearch}>
        <TextInput
          style={styles.inputSearch}
          placeholder="Looking for a game?"
          placeholderTextColor="#FFF"
        />
        <TouchableOpacity>
          <Feather name="search" size={30} color="#FF455F" />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={categorys}
          keyExtractor={item => String(item.id)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <ListCategory data={item} />}
        />
      </View>

      <Text style={styles.textTrending}>Trending games</Text>
      <FlatList
        contentContainerStyle={{paddingHorizontal: 10, paddingBottom: 10}}
        data={games}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ListTrendingGames dataGames={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050B18',
  },
  headerHome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginHorizontal: 10,
  },
  logoTextPrimary: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  logoTextSecundary: {
    color: '#FF455F',
    fontWeight: 'bold',
    fontSize: 30,
  },
  buttonFavorite: {
    backgroundColor: '#1F2430',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  containerSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 20,
  },
  inputSearch: {
    backgroundColor: '#1F2430',
    width: '90%',
    height: 45,
    borderRadius: 20,
    paddingLeft: 15,
  },
  textTrending: {
    marginTop: 15,
    paddingLeft: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
