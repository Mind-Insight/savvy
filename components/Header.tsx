import { View, TouchableOpacity, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"

import styled from "styled-components/native"

const logoWidth = 164
const searchWidth = 24

export default function HeaderView() {
	const navigation = useNavigation()
	return (
		<View>
			<HeaderBlock>
				<HeaderImage source={require("../assets/search.png")}></HeaderImage>
				<LogoContainer>
					<Pressable onPress={() => navigation.navigate("Help")}>
						<HeaderLogo source={require("../assets/logo.png")} />
					</Pressable>
				</LogoContainer>
				<View style={{ width: searchWidth }} />
			</HeaderBlock>
		</View>
	)
}

const LogoContainer = styled.View`
	flex: 1;
	align-items: center;
`

const HeaderBlock = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	background-color: #ffffff;
`

const HeaderImage = styled.Image`
	width: ${searchWidth}px;
	height: ${searchWidth}px;
	margin-left: 10px;
`

const HeaderLogo = styled.Image`
	width: ${logoWidth}px;
	height: 24px;
`
