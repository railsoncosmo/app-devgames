import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ListTrendingGames({dataGames}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: dataGames?.background_image}}
        resizeMode="cover"
      />
      <View style={styles.containerRating}>
        <Text style={styles.titleGame}>{dataGames?.name}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome style={{ marginTop: 5}} name="star" size={14} color="#FFD700" />
          <Text 
            style={{color: '#fff', paddingLeft: 5, marginTop: 5, textAlign: 'center'}}>
              {dataGames.rating}/10
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 170,
    borderRadius: 8,
    opacity: 0.3,
    position: 'relative',
  },
  titleGame:{
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  containerRating:{
    position: 'absolute',
    left: 12,
    bottom: 10,
  }
});
