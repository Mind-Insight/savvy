import { View, Dimensions, ScaledSize } from "react-native"
import { useState, useEffect } from "react"

import styled from "styled-components/native"

const logoWidth = 164
const searchWidth = 24

export default function HeaderView() {
	const [screenWidth, setScreenWidth] = useState(Dimensions.get("window").width)

	useEffect(() => {
		const onChange = ({ window }: { window: ScaledSize }) => {
			const { width } = window
			setScreenWidth(width)
		}
		const subscription = Dimensions.addEventListener("change", onChange)
		return () => {
			subscription.remove()
		}
	}, [])
	const translateXValue = screenWidth / 2 - logoWidth / 2
	return (
		<View>
			<HeaderBlock>
				<HeaderImage source={require("../assets/search.png")}></HeaderImage>
				<HeaderLogo
					style={{ transform: [{ translateX: translateXValue - searchWidth }] }}
					source={require("../assets/logo.png")}
				/>
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
`
