import { StyleSheet, Text, View, Image } from "react-native"

export default function OpenedBlock() {
  return (
    <View style={styles.block}>
      <Image
            style={styles.blockImage} 
            source={require("../assets/images/pig.jpg")}
            >
            </Image>
            <Text style={styles.imageTitle}></Text>
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
        position: 'relative',
  },
    imageTitle: {
        fontFamily: 'sans-serif',
        position: 'absolute',
        bottom: 44,
        left: 16
    }
})
