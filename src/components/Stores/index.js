import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Stores({ data }) {
 return (
    <View style={styles.buttonStore}>
      <Text style={styles.textStore}>{data?.name}</Text>
    </View>
     );
   }
   
   const styles = StyleSheet.create({
     buttonStore: {
       backgroundColor: '#64748B',
       height: 30,
       borderRadius: 8,
       margin: 8,
       marginTop: 25,
       paddingHorizontal: 10,
       justifyContent: 'center',
       alignItems: 'center',
     },
     textStore: {
       color: '#fff',
       fontSize: 16,
       fontWeight: 'bold',
     },
   });