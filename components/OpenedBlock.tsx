import { StyleSheet, Text, View, Image, ImageBackground } from "react-native"

export default function OpenedBlock() {
	return (
		<View style={styles.block}>
			<ImageBackground
            	style={styles.blockImage} 
            	source={require("../assets/images/pig.jpg")}
            >
				<Text style={styles.imageTitle}>Поиск воды</Text>
				<Text style={styles.imageSubTitle}>Краткое пособие по поиску и дезинфекции воды в дикой среде</Text>
            </ImageBackground>
			<Text style={styles.content}>1. Найдите источник воды, такой как ручей, река или озеро. <br /> <br />
				2. Очистите воду, используя фильтр или кипячение. <br /> <br />
				3. Выпейте только очищенную воду, чтобы избежать инфекций. <br /> <br />
				4. Если источник воды не найден, можно сконструировать солнечный стиллер или встроенный фильтр из природных материалов. <br /> <br />
				5. Не пейте воду из стоячих болот или водоемов, чтобы предотвратить заражение.</Text>
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
        left: 16,
		fontSize: 30,
		color: 'white',
		fontWeight: 600,
    },
	imageSubTitle: {
		width: 300,
		fontFamily: 'sans-serif',
		fontWeight: 300,
		color: 'white',
		position: 'absolute',
		bottom: 16,
        left: 17,
	},
	content: {
		padding: 16,
		paddingTop: 24,
		color: '#323232'
	}
})