import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function ListCategory({data}) {
  return (
    <TouchableOpacity style={styles.buttonCategory}>
      <Text style={styles.textCategory}>{data?.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonCategory: {
    backgroundColor: '#64748B',
    height: 35,
    borderRadius: 8,
    margin: 8,
    marginTop: 25,
    padding: 5,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCategory: {
    color: '#fff',
    fontSize: 16,
  },
});
