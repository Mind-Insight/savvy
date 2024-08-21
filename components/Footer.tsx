import React from "react"
import { View, TouchableOpacity, Dimensions, Pressable } from "react-native"
import styled from "styled-components/native"
import { useNavigation } from "@react-navigation/native"

const { height } = Dimensions.get("window")

export default function FooterView() {
	const navigation = useNavigation()
	return (
		<View>
			<FooterContainer>
				<Pressable onPress={() => navigation.navigate("Diary")}>
					<FooterBlock>
						<FooterImage source={require("../assets/Notebook.png")} />
						<FooterText>Дневник</FooterText>
					</FooterBlock>
				</Pressable>

				<Pressable onPress={() => navigation.navigate("Maps")}>
					<FooterBlock>
						<FooterImage source={require("../assets/Map.png")} />
						<FooterText>Карты</FooterText>
					</FooterBlock>
				</Pressable>

				<Pressable onPress={() => navigation.navigate("Compass")}>
					<FooterBlock>
						<FooterImage source={require("../assets/Compass.png")} />
						<FooterText>Компас</FooterText>
					</FooterBlock>
				</Pressable>

				<Pressable onPress={() => navigation.navigate("Help")}>
					<FooterBlock>
						<FooterImage source={require("../assets/Info.png")} />
						<FooterText>Помощь</FooterText>
					</FooterBlock>
				</Pressable>
			</FooterContainer>
		</View>
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
