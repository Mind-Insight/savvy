import React from 'react';
import { View, Text } from 'react-native';


export default function Home() {
    return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: "100%" }}>
            <Text>Это главный экран</Text>
          </View>
        </View>
      );
};
