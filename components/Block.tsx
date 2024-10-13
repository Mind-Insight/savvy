import { StyleSheet, Text, View, Image, Pressable, ImageBackground } from "react-native"
import { useNavigation } from '@react-navigation/native'
import React from "react"
import Arrow from "../assets/arrow.svg"

interface IBlockProps {
    title: string;
    text: string;
    imageSource?: string;
}

export default function Block({title, text, imageSource}: IBlockProps) {
    const navigation = useNavigation()
    const handleBlockPress = () => {
        navigation.navigate("OpenedBlock", {
            imageSource: imageSource,
            title: title,
            text: text
        })
    }

	return (
        <View style={styles.container}>
            <Pressable onPress={handleBlockPress} style={styles.block}>
                <ImageBackground source={imageSource} resizeMode="cover" style={styles.image}>
                    <Text style={styles.blockTitle}>{title}</Text>
                    <Text style={styles.blockText}>{text}</Text>
                    <View style={styles.arrow}><Arrow/></View>
                </ImageBackground>
            </Pressable>
        </View>
	)
}

const styles = StyleSheet.create({
    container: {
            flex: 1,
            marginLeft: "5%",
            marginRight: "5%",
            marginTop: 25
    },
    image: {
        flex: 1,
        height: 236,
    },
    block: {
        borderRadius: 40,
        overflow: 'hidden',
        position: 'relative',
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
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'regular',
        padding: 25,
        paddingVertical: 9,
        backgroundColor: '#00000010',
        borderRadius: 40,
        maxWidth: 270,
        position: 'absolute',
        left: 13,
        bottom: 12
    },
    arrow: {
        padding: 21,
        backgroundColor: '#00000002',
        borderRadius: 44,
        position: 'absolute',
        right: 13,
        bottom: 12
    }
})