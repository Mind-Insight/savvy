import HeaderView from "./Header"
import FooterView from "./Footer"
import {View} from "react-native"

interface IScreenWithHeaderAndFooterProps {
	children: ReactNode
}
function ScreenWithHeaderAndFooter({
	children,
}: IScreenWithHeaderAndFooterProps) {
	return (
		<>
			<View style={{ backgroundColor: "#fff", height: "100%" }}>
				<HeaderView />
				{children}
				<FooterView />
			</View>
		</>
	)
}

export default ScreenWithHeaderAndFooter