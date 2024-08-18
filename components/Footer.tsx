import { View, Dimensions } from "react-native"

import styled from "styled-components/native"

const { height } = Dimensions.get("window")

export default function FooterView() {
	return (
		<View>
			<FooterContainer>
				<FooterBlock>
					<FooterImage source={require("../assets/Notebook.png")}></FooterImage>
					<FooterText>Дневник</FooterText>
				</FooterBlock>
				<FooterBlock>
					<FooterImage source={require("../assets/Map.png")}></FooterImage>
					<FooterText>Карты</FooterText>
				</FooterBlock>
				<FooterBlock>
					<FooterImage source={require("../assets/Compass.png")}></FooterImage>
					<FooterText>Компасс</FooterText>
				</FooterBlock>
				<FooterBlock>
					<FooterImage source={require("../assets/Info.png")}></FooterImage>
					<FooterText>Помощь</FooterText>
				</FooterBlock>
			</FooterContainer>
		</View>
	)
}

const FooterContainer = styled.View`
	flex-direction: row;
	position: absolute;
    top: ${height - 50}px;
	justify-content: space-around;
	width: 100vw;
	bordertop: 1px solid black;
	border-top-width: 2px;
	border-top-color: #e4e4e4;
	border-top-style: solid;
`

const FooterBlock = styled.View`
	align-items: center;
	width: 90px;
	height: 44px;
	justify-content: center;
`

const FooterImage = styled.Image`
	width: 24px;
	height: 24px;
	margin-bottom: 3px;
`

const FooterText = styled.Text`
	font-size: 10px;
`
