import React from 'react';
import { View, Image } from 'react-native';

export default function FlatImage({ data}) {
 return (
    <View style={{ flex: 1 }}>
        <Image
        style={{ width: 370, height: 400}}
        source={{uri: data?.image}}
        resizeMode="cover"
        />
    </View>
  );
}