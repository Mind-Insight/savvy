import { StyleSheet, Text, View, Image, ImageBackground } from "react-native"
import { data } from "./data"

export default function OpenedBlock(name: string) {
	const filteredData = data.filter(item => item.title == name)[0]

	return (
		<View style={styles.block}>
			<ImageBackground
				style={styles.blockImage}
				source={filteredData.imageSource}
			>
				<Text style={styles.imageTitle}>{filteredData.title}</Text>
				<Text style={styles.imageSubTitle}>{filteredData.text}</Text>
			</ImageBackground>
			<Text style={styles.content}>{filteredData.content}</Text>
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
		height: 194,
		position: "relative",
	},
	imageTitle: {
		fontFamily: "sans-serif",
		position: "absolute",
		bottom: 44,
		left: 16,
		fontSize: 30,
		color: "white",
		fontWeight: 600,
	},
	imageSubTitle: {
		width: 300,
		fontFamily: "sans-serif",
		fontWeight: 300,
		color: "white",
		position: "absolute",
		bottom: 16,
		left: 17,
	},
	content: {
		padding: 16,
		paddingTop: 24,
		color: "#323232",
	},
})
