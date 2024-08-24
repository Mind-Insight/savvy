import { FC, useState } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"

import styled from "styled-components/native"

interface ICategoriesProps {
	onSelectCategory: (category: string) => void
}

const Categories: FC<ICategoriesProps> = ({ onSelectCategory }) => {
	const [activeIndex, setActiveIndex] = useState<number>(0)
	const categories = ["Руководство по выживанию", "Животные", "Растения"]

	const handleCategoryPress = (index: number) => {
		setActiveIndex(index)
		onSelectCategory(categories[index])
	}

	return (
		<Container horizontal showsHorizontalScrollIndicator={false}>
			<TouchableOpacity onPress={() => handleCategoryPress(0)}>
				<CategoryBlock active={activeIndex === 0}>
					<CategoryText style={{ width: 250 }}>
						{categories[0]}
					</CategoryText>
				</CategoryBlock>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => handleCategoryPress(1)}>
				<CategoryBlock active={activeIndex === 1}>
					<CategoryText style={{ width: 100 }}>{categories[1]}</CategoryText>
				</CategoryBlock>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => handleCategoryPress(2)}>
				<CategoryBlock active={activeIndex === 2}>
					<CategoryText style={{ width: 100 }}>{categories[2]}</CategoryText>
				</CategoryBlock>
			</TouchableOpacity>
		</Container>
	)
}

const Container = styled(ScrollView)`
	flex-direction: row;
	padding: 10px;
	margin-bottom: 15px;
	margin-top: 10px;
`

const CategoryBlock = styled.View<{ active: boolean }>`
	border: 1px solid #e4e4e4;
	border-radius: 30px;
	padding-top: 6px;
	padding-bottom: 6px;
	margin-right: 5px;
	background-color: ${({ active }) => (active ? "#f2f2f2" : "#fff")};
	align-items: center;
	justify-content: center;
`

const CategoryText = styled.Text`
	font-size: 14px;
	text-align: center;
	color: #4d4d4d;
`
export default Categories
