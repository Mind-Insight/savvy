import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

import styled from "styled-components/native"

import HeaderView from "components/Header"
import FooterView from "components/Footer"

export default function App() {
	return (
		<Container>
			<HeaderView></HeaderView>
			<FooterView></FooterView>
			<StatusBar style="auto" />
		</Container>
	)
}


const Container = styled.View`
    position: relative;
`