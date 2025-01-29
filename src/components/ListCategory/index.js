import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export default function ListCategory({ data }) {
  const navigation = useNavigation();

  function handleCategorys() {
    navigation.navigate('Categorys', {data});
  }

  return (
    <TouchableOpacity 
      style={styles.buttonCategory}
      onPress={handleCategorys}
    >
      <Text style={styles.textCategory}>{data?.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonCategory: {
    backgroundColor: '#64748B',
    height: 30,
    borderRadius: 8,
    margin: 8,
    marginTop: 25,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCategory: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
