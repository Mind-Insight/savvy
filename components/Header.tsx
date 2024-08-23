import { View, TouchableOpacity, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"

import styled from "styled-components/native"
import { TypeRootStackParamList } from "./types/types"
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types"
import { SvgUri } from "react-native-svg"
import Logo from "../assets/hlogo.svg"
import Search from "../assets/lupa.svg"

const logoWidth = 164
const searchWidth = 24

type NavigationProp = NativeStackNavigationProp<TypeRootStackParamList>

export default function HeaderView() {
	const navigation = useNavigation<NavigationProp>()
	return (
		<HeaderBlock>
			<Search width={searchWidth} height={searchWidth} style={{ marginLeft: 10 }} />
			<LogoContainer>
				<Pressable onPress={() => navigation.navigate("Home")}>
					<Logo width={logoWidth} height={searchWidth} style={{marginRight: 10}}/>
				</Pressable>
			</LogoContainer>
			<View style={{ width: searchWidth }} />
		</HeaderBlock>
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
