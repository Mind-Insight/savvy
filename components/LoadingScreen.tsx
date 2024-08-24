import React from "react"
import { View, StyleSheet, Text, Image } from "react-native"
import Logo from "../assets/hlogo.svg"

const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            <Logo width="164" height="24" />
            {/* <Image source={require("../assets/logo.png")} style={{width: 164, height: 24}}></Image> */}
        </View>
    );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ffffff",
	},
})

export default LoadingScreen
