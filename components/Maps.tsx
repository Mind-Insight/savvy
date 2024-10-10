import React from 'react';
import { ScrollView, View } from 'react-native'
import { useAppContext } from './AppContext'
import Categories from './Categories'
import Block from './Block'
import ScreenWithHeaderAndFooter from "components/ScreenWithHeaderAndFooter"
import {data} from "./data"
import Map from "../assets/UnMap.svg"

const Diary = () => {

    return (
        <ScreenWithHeaderAndFooter>
            <ScrollView>
                <Block
                    title="Фотоальбом"
                    text="Вспомните, как это было!"
                    imageSource={<Map />}
                />
                <Block
                    title="Фотоальбом"
                    text="Вспомните, как это было!"
                />
            </ScrollView>
        </ScreenWithHeaderAndFooter>
    );
};

export default Diary;