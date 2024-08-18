import { StatusBar } from "expo-status-bar"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"

import styled from "styled-components/native"

import HeaderView from "components/Header"
import FooterView from "components/Footer"
import Block from './components/Block'

export default function App() {
	return (
		<SafeAreaView>
			<Container>
				<HeaderView></HeaderView>
                <Block />
				<FooterView></FooterView>
				<StatusBar style="auto" />
			</Container>
		</SafeAreaView>
	)
}

const Container = styled.View`
    position: relative;
`