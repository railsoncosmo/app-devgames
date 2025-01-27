import React, { useState, useEffect } from 'react';
import {
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Text, 
  FlatList, 
  ScrollView,
  Modal,
} from 'react-native';

import ListCategory from '../../components/ListCategory';
import FlatImage from '../../components/FlatImage';
import ModalDetails from '../../components/ModalDetails';
import Platforms from '../../components/Platforms';

import api from '../../services/api';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Detail({ route }) {
  const {dataGames} = route.params;
  const [detailsGames, setDetailsGames] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {

    async function loadData() {
      try {
        const response = await api.get(`/games/${dataGames?.id}`);
        setDetailsGames(response.data);
        console.log(dataGames?.name);
      }
      catch (error) {
        console.log('Não foi possivel carregar os dados do jogo', error);
      }
    }

    loadData()

  }, [dataGames?.name]);

  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.headerButtons}>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonFavorite}>
            <Feather name="bookmark" size={30} color="#FFF" />
          </TouchableOpacity>
        </View>

        <FlatList
            data={dataGames?.short_screenshots}
            keyExtractor={item => String(item.id)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <FlatImage data={item} />}
          />

      </View>

      <View style={styles.contentInfo}>
        <View style={styles.contentRating}>
          <FontAwesome name="star" size={14} color="#FFD700" />
          <Text style={{color: '#fff', paddingLeft: 5, fontSize: 14}}>
            {dataGames?.rating}/10
          </Text>
        </View>
        <Text style={{color: '#fff', marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
          {dataGames?.name}
        </Text>
        <View>
          <Text style={{ color: '#fff', marginTop: 20, fontSize: 18, fontWeight: 'bold'}}>
            Genres
          </Text>
          <FlatList
            style={{marginTop: -20, marginLeft: -10}}
            data={dataGames?.genres}
            keyExtractor={item => String(item.id)}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <ListCategory data={item} />}
          />
        </View>

        <View style={styles.contentDescription}>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Description</Text>
          <Text 
            style={{color: '#fff', marginTop: 10}}
            numberOfLines={7}
          >
          {detailsGames?.description}</Text>
        </View>
      </View>

        <TouchableOpacity 
          style={styles.buttonReadDescription}
          onPress={() => setModalVisible(true)}
        >
            <Text style={{color: '#fff', fontSize: 14}}>Read full description</Text>
        </TouchableOpacity>

        <Modal animationType="fade" visible={modalVisible}>
          <ModalDetails
            infoGame={detailsGames}
            setVisible={() => setModalVisible(false)}
          />
        </Modal>

        <View style={styles.contentDescription}>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Platforms</Text>
          <FlatList
            data={detailsGames?.metacritic_platforms}
            keyExtractor={item => String(item.platform)}
            horizontal={true}
            renderItem={({item}) => <Platforms data={item.platform} />}
          />
        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050B18',
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  buttonBack: {
    backgroundColor: '#0F172A',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    zIndex: 99,
    top: 20,
    left: 15,
  },
  buttonFavorite: {
    backgroundColor: '#0F172A',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    zIndex: 99,
    top: 20,
    right: 15,
  },
  contentInfo: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 20,
  },
  contentRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonReadDescription: {
    backgroundColor: '#0E5C88',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 20,
  },
});
