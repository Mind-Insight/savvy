import React from 'react';
import { View, Text } from 'react-native';

import styled from 'styled-components/native';


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const HelpText = styled.Text`
  font-size: 20px;
  width: 100%;
  text-align: center;
`;

export default function Help() {
    return (
        <Container>
          <HelpText>Это текст помощи</HelpText>
        </Container>
      );
};
