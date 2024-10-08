import React from 'react';
import { ScrollView, View } from 'react-native'
import { useAppContext } from './AppContext'
import Categories from './Categories'
import Block from './Block'
import ScreenWithHeaderAndFooter from "components/ScreenWithHeaderAndFooter"
import {data} from "./data"
import PhotoAlbum from "../assets/photoalbum.svg"

const Diary = () => {

    return (
        <ScreenWithHeaderAndFooter>
            <ScrollView>
                <Block
                    title="Фотоальбом"
                    text="Вспомните, как это было!"
                    imageSource={<PhotoAlbum />}
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