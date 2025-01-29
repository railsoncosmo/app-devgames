import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

export default function ModalDetails({ infoGame, setVisible }) {
    function handleCloseModal() {
        setVisible(false);
    }

 return (
   <ScrollView style={styles.container}>
     <View style={styles.headerModal}>
        <TouchableOpacity 
         style={styles.buttonBack}
         onPress={handleCloseModal}
        >
            <Feather name="arrow-left" size={30} color="#FFF" />
        </TouchableOpacity>
       <Text style={styles.headerTitle}>Description</Text>
     </View>
     <Text style={styles.descriptionText}>{infoGame.description}</Text>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F172A',
    },
    headerModal: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonBack: {
        backgroundColor: '#050B18',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        position: 'absolute',
        zIndex: 99,
        left: 15,
      },
      headerTitle: {
        fontSize: 28,
        fontWeight: '600',
        color: '#fff',
      },
      descriptionText: {
        color: '#fff',
        fontSize: 16,
        marginTop: 30,
        marginHorizontal: 15,
        textAlign: 'justify',
        lineHeight: 25,
        marginBottom: 20,
      },
});