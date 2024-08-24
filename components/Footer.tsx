import React from "react"
import { View, Pressable } from "react-native"
import styled from "styled-components/native"
import { useNavigation } from "@react-navigation/native"
import { TypeRootStackParamList } from "./types/types"
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types"

import Notebook from "../assets/Notebook.svg"
import Map from "../assets/Map.svg"
import Compass from "../assets/Compass.svg"
import Info from "../assets/Info.svg"

type NavigationProp = NativeStackNavigationProp<TypeRootStackParamList>

export default function FooterView() {
	const navigation = useNavigation<NavigationProp>()
	return (
			<FooterContainer>
				<Pressable onPress={() => navigation.navigate("Diary")}>
					<FooterBlock>
						<Notebook width="24" height="24"/>
						<FooterText>Дневник</FooterText>
					</FooterBlock>
				</Pressable>

				<Pressable onPress={() => navigation.navigate("Maps")}>
					<FooterBlock>
						<Map width="24" height="24"/>
						<FooterText>Карты</FooterText>
					</FooterBlock>
				</Pressable>

				<Pressable onPress={() => navigation.navigate("Compass")}>
					<FooterBlock>
						<Compass width="24" height="24"/>
						<FooterText>Компас</FooterText>
					</FooterBlock>
				</Pressable>

				<Pressable onPress={() => navigation.navigate("Help")}>
					<FooterBlock>
						<Info width="24" height="24"/>
						<FooterText>Помощь</FooterText>
					</FooterBlock>
				</Pressable>
			</FooterContainer>
	)
}

const FooterContainer = styled.View`
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
	bordertop: 1px solid black;
	border-top-width: 2px;
	border-top-color: #e4e4e4;
	border-top-style: solid;
`

const FooterBlock = styled.View`
	align-items: center;
	justify-content: center;
	height: 50px;
`

const FooterImage = styled.Image`
	width: 24px;
	height: 24px;
	margin-bottom: 3px;
`

const FooterText = styled.Text`
	font-size: 10px;
	width: 90px;
	text-align: center;
`
