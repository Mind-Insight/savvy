import React from 'react';
import { ScrollView, View } from 'react-native'
import { useAppContext } from './AppContext'
import Categories from './Categories'
import Block from './Block'
import ScreenWithHeaderAndFooter from "components/ScreenWithHeaderAndFooter"
import {data} from "./data"

const Diary = () => {
    const { selectedCategory, setSelectedCategory } = useAppContext()
    const filteredData = data.filter(item => item.category === selectedCategory)

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category)
    };

    return (
        <ScreenWithHeaderAndFooter>
            <ScrollView>
                <Categories
                    onSelectCategory={handleCategorySelect}
                    selectedCategory={selectedCategory}
                />
                {filteredData.map(item => (
                    <Block
                        key={item.id}
                        title={item.title}
                        text={item.text}
                        imageSource={<item.imageSource />}
                    />
                ))}
            </ScrollView>
        </ScreenWithHeaderAndFooter>
    );
};

export default Diary;