import { StyleSheet, Text, View, Image } from "react-native"

export default function Block() {
	return (
		<View style={styles.block}>
			<Image
				style={styles.blockImage}
				source={require("../assets/images/pig.jpg")}
			></Image>
			<View style={styles.blockContent}>
				<View style={styles.blockTextContent}>
					<Text style={styles.blockTitle}>Защита от кабана</Text>
					<Text style={styles.blockText}>
						Краткое пособие по правилам обращения и самообороны при встрече с
						дикими кабанами
					</Text>
				</View>

				<Image source={require("../assets/images/blockArrow.png")}></Image>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	block: {
		width: "100%",
		borderRadius: 15,
		overflow: "hidden",
		shadowColor: "#00000004",
		shadowRadius: 4,
		shadowOffset: {
			width: 0,
			height: 7,
		},
	},
	blockImage: {
		width: "100%",
		height: 166,
	},
	blockTitle: {
		fontFamily: "sans-serif",
		fontWeight: 600,
		fontSize: 24,
		width: "calc(100% - 36px)",
		marginBottom: 6,
	},
	blockText: {
		fontFamily: "sans-serif",
		fontWeight: 300,
		fontSize: 10,
		color: "#696969",
		width: "calc(100% - 36px)",
	},
	blockContent: {
		flexDirection: "row",
		padding: 16,
		justifyContent: "space-between",
		alignItems: "center",
	},
	blockTextContent: {
		width: "calc(100% - 36px)",
	},
})
