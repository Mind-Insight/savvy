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
                    <ImageBackground source={imageSource} resizeMode="cover" style={styles.image}>
                        <Text style={styles.blockTitle}>{title}</Text>
                        <Text style={styles.blockText}>{text}</Text>
                    </ImageBackground>
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
        borderRadius: 40,
        height: 236
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
		color: "#1D1D1D",
		fontSize: 16,
		fontWeight: 'normal'
	},
    image: {
        flex: 1,
        height: 236,
    },
    blockTitle: {
        position: 'absolute',
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'normal',
        padding: 25,
        paddingVertical: 14,
        backgroundColor: '#00000010',
        borderRadius: 40,
        top: 14,
        left: 13
    },
    blockText: {
        position: 'absolute',
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'regular',
        padding: 25,
        paddingVertical: 9,
        backgroundColor: '#00000010',
        borderRadius: 40,
        bottom: 12,
        left: 13
    }
})

//{React.cloneElement(imageSource, { width: '100%', height: 162 })}
