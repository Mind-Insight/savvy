import { View, Dimensions } from "react-native"

import styled from "styled-components/native"

const { width } = Dimensions.get("window")
console.log(width)
const logoWidth = 164
const searchWidth = 24
const translateXValue = width / 2 - logoWidth / 2

export default function HeaderView() {
	return (
		<View>
			<HeaderBlock>
				<HeaderImage source={require("../assets/search.png")}></HeaderImage>
				<HeaderLogo source={require("../assets/logo.png")}></HeaderLogo>
			</HeaderBlock>
		</View>
	)
}

const HeaderBlock = styled.View`
    position: absolute;
	flex-direction: row;
	align-items: center;
	padding: 10px;
`

const HeaderImage = styled.Image`
	width: ${searchWidth}px;
	height: 24px;
`

const HeaderLogo = styled.Image`
	width: ${logoWidth}px;
	height: 24px;
	position: absolute;
	left: 50%;
	transform: translateX(${translateXValue - searchWidth}px);
`
