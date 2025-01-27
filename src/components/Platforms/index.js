import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Platforms({ data }) {
 return (
    <TouchableOpacity style={styles.buttonPlataform}>
      <Text style={styles.textPlataform}>{data?.name}</Text>
    </TouchableOpacity>
     );
   }
   
   const styles = StyleSheet.create({
     buttonPlataform: {
       backgroundColor: '#64748B',
       height: 30,
       borderRadius: 8,
       margin: 8,
       marginTop: 25,
       paddingHorizontal: 10,
       justifyContent: 'center',
       alignItems: 'center',
     },
     textPlataform: {
       color: '#fff',
       fontSize: 16,
       fontWeight: 'bold',
     },
   });