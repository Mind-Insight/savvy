import { StyleSheet, Text, View, Image } from "react-native"

interface IBlockProps {
    title: string
    text: string
    imageSource: any
}

export default function Block({title, text, imageSource}: IBlockProps) {
	return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Image
                    style={styles.blockImage}
                    source={imageSource}
                ></Image>
                <View style={styles.blockContent}>
                    <View style={styles.blockTextContent}>
                        <Text style={styles.blockTitle}>{title}</Text>
                        <Text style={styles.blockText}>
                            {text}
                        </Text>
                    </View>

                    <Image source={require("../assets/images/blockArrow.png")}></Image>
                </View>
            </View>
        </View>
	)
}

const styles = StyleSheet.create({
	block: {
		width: "95%",
		borderRadius: 15,
		overflow: "hidden",
        backgroundColor: "#fff",
		elevation: 1,
        marginBottom: 12,
	},
	blockImage: {
		width: "100%",
		height: 166,
	},
	blockTitle: {
        // --------- ПОДКЛЮЧИТЬ ШРИФТ SF Pro ---------
		fontFamily: "sans-serif",
		fontWeight: "bold",
		fontSize: 24,
		width: "calc(100% - 36px)",
		marginBottom: 6,
        letterSpacing: 0.5,
	},
	blockText: {
		fontFamily: "sans-serif",
		fontWeight: "medium",
		fontSize: 10,
		color: "#696969",
		width: "calc(100% - 36px)",
	},
	blockContent: {
        width: "95%",
		flexDirection: "row",
		// padding: 16,
        paddingTop: 16,
        paddingLeft: 16,
        paddingBottom: 16,
		alignItems: "center",
        justifyContent: "space-between",
	},
	blockTextContent: {
		width: "90%",
	},
    container: {
        flex: 1,
        marginLeft: "5%",
    }
})
