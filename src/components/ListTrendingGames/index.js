import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function ListTrendingGames({dataGames}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: dataGames.background_image}}
        resizeMode="cover"
      />
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
  },
});
