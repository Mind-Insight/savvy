import React from "react"
import { View, Pressable } from "react-native"
import styled from "styled-components/native"
import { useNavigation } from "@react-navigation/native"
import { TypeRootStackParamList } from "./types/types"
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types"

import Maps from "../assets/Map.svg"
import UnMaps from "../assets/UnMap.svg"
import Main from "../assets/main.svg"
import UnMain from "../assets/un_main.svg"
import Compass from "../assets/compass.svg"
import UnCompass from "../assets/un_compass.svg"
import Info from "../assets/info.svg"
import UnInfo from "../assets/un_info.svg"
import Note from "../assets/note.svg"
import UnNote from "../assets/un_note.svg"

type NavigationProp = NativeStackNavigationProp<TypeRootStackParamList>

export default function FooterView({currentPage}) {
	const navigation = useNavigation<NavigationProp>()

	const pagesNames = ["Дневник", "Карты", "Компас", "Помощь"]
	const pages = ["Main", "Maps", "Compass", "Help"]
	const icons = [
        { active: <Note />, inactive: <UnNote /> },
        { active: <Maps />, inactive: <UnMaps /> },
        { active: <Compass />, inactive: <UnCompass /> },
        { active: <Info />, inactive: <UnInfo /> },
    ];

	const currentIndex = pages.indexOf(currentPage);

	return (
        <FooterContainer>
          {pages.map((page, index) => {
            const isActive = index === currentIndex;
            const Icon = isActive ? icons[index].active : icons[index].inactive

            return (
              <Pressable key={index} onPress={() => navigation.navigate(page)}>
                <FooterBlock>
                  {React.cloneElement(Icon, {
                    width: "24",
                    height: "24",
                  })}
                  <FooterText style={{ color: isActive ? '#58AD59' : '#000' }}>
                    {pagesNames[index]}
                  </FooterText>
                </FooterBlock>
              </Pressable>
            );
          })}
        </FooterContainer>
      );
}

const FooterContainer = styled.View`
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
	bordertop: 1px solid black;
	border-top-width: 2px;
	border-top-color: #e4e4e4;
	border-top-style: solid;
`

const FooterBlock = styled.View`
	align-items: center;
	justify-content: center;
	height: 50px;
`

const FooterImage = styled.Image`
	width: 24px;
	height: 24px;
	margin-bottom: 3px;
`

const FooterText = styled.Text`
	font-size: 10px;
	width: 90px;
	text-align: center;
`
