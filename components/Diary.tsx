import React from 'react';
import { View, Text } from 'react-native';


export default function Diary() {
    return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Это экран дневника</Text>
          </View>
        </View>
      );
};
