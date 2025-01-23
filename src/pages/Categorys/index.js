import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Categorys() {
 return (
   <View style={styles.container}>
     <Text>Tela Categorys</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});