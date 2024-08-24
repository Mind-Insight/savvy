import { StyleSheet, Text, View, Image, ImageBackground } from "react-native"
import React from "react"
import { data } from "./data"

export default function OpenedBlock({route}) {
    const {imageSource, title, text} = route.params
	const filteredData = data.filter(item => item.title == title)[0]

	return (
        <View style={styles.container}>
            <View style={styles.block}>
                <View style={styles.blockImage}>
                    {React.cloneElement(imageSource, { width: '100%', height: 162 })}
                    <View style={styles.overlayContainer}>
                        <Text style={styles.overlayTitle}>{title}</Text>
                        <Text style={styles.overlayText}>{text}</Text>
                    </View>
                </View>
                <Text style={styles.content}>{filteredData.content}</Text>
            </View>
        </View>
	)
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flex: 1,
        marginLeft: "5%",
    },
	block: {
		width: "95%",
		borderRadius: 15,
		overflow: "hidden",
		backgroundColor: "#fff",
        elevation: 1,
        position: "relative",
	},
	blockImage: {
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
		fontSize: 16,
	},
    overlayContainer: {
        width: "70%",
        position: "relative",
        left: 16,
        bottom: 16,
    },
    overlayTitle: {
        fontFamily: "sans-serif",
        position: "absolute",
        bottom: 28,
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
    },
    overlayText: {
        fontSize: 10,
        bottom: 6,
        color: "white",
        fontWeight: "light",
        position: "absolute",
    }
})
