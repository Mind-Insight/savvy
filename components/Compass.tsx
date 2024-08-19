import React from 'react';
import { View, Text } from 'react-native';

import HeaderView from './Header';

const Compass: React.FC = () => {
    return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Это экран компаса</Text>
          </View>
        </View>
      );
};

export default Compass;