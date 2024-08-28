import HeaderView from "./Header"
import FooterView from "./Footer"
import { useRoute } from '@react-navigation/native'
import {View} from "react-native"

interface IScreenWithHeaderAndFooterProps {
	children: ReactNode
}
function ScreenWithHeaderAndFooter({
	children,
}: IScreenWithHeaderAndFooterProps) {
    const route = useRoute()
	return (
		<>
			<View style={{ backgroundColor: "#fff", height: "100%" }}>
				<HeaderView />
				{children}
				<FooterView currentPage={route.name} />
			</View>
		</>
	)
}

export default ScreenWithHeaderAndFooter