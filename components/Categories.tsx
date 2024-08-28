import { FC, useState } from "react"
import { View, Text, ScrollView, TouchableOpacity, Pressable } from "react-native"

import styled from "styled-components/native"

interface ICategoriesProps {
	onSelectCategory: (category: string) => void
}

const Categories: FC<ICategoriesProps> = ({ onSelectCategory, selectedCategory }) => {
	const categories = ["Руководство по выживанию", "Животные", "Растения"]
	const activeIndex = categories.indexOf(selectedCategory)

	const handleCategoryPress = (index: number) => {
            onSelectCategory(categories[index]);
    };

	return (
		<Container horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => (
                <Pressable key={index} onPress={() => handleCategoryPress(index)}>
                    <CategoryBlock active={activeIndex === index}>
                        <CategoryText style={{ width: index === 0 ? 220 : 100 }}>
                            {category}
                        </CategoryText>
                    </CategoryBlock>
                </Pressable>
            ))}
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
