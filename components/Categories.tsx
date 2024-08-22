import { FC } from "react"
import { View, Text, ScrollView } from "react-native"

import styled from "styled-components/native"

const Categories: FC = () => {
	return (
		<Container horizontal showsHorizontalScrollIndicator={false}>
			<CategoryBlock>
				<CategoryText style={{ width: 250 }}>
					Руководство по выживанию
				</CategoryText>
			</CategoryBlock>
			<CategoryBlock>
				<CategoryText style={{ width: 100 }}>Животные</CategoryText>
			</CategoryBlock>
			<CategoryBlock>
				<CategoryText style={{ width: 100 }}>Растения</CategoryText>
			</CategoryBlock>
		</Container>
	)
}

const Container = styled(ScrollView)`
	flex-direction: row;
	padding: 10px;
	margin-bottom: 25px;
	margin-top: 10px;
`

const CategoryBlock = styled.View`
	border: 1px solid #e4e4e4;
	border-radius: 30px;
	padding-top: 6px;
    padding-bottom: 6px;
	margin-right: 5px;
	background-color: #fff;
	align-items: center;
	justify-content: center;
`

const CategoryText = styled.Text`
	font-size: 14px;
	text-align: center;
	color: #4d4d4d;
`
export default Categories
