import React from 'react';
import { View, Text } from 'react-native';


export default function Main() {
    return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Это главный экран</Text>
          </View>
        </View>
      );
};
