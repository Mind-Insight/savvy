import { StatusBar } from "expo-status-bar"
import React, { ReactNode } from "react"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { Dimensions, ScaledSize } from "react-native"
import { useState, useEffect } from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import styled from "styled-components/native"



import HeaderView from "components/Header"
import FooterView from "components/Footer"
import Compass from "./components/Compass"
import Diary from "components/Diary"
import Help from "components/Help"
import Map from "components/Map"
import Home from "components/Home"
import OpenedBlock from "components/OpenedBlock"
import Block from "components/Block"
import Categories from "components/Categories"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { FlatList, ScrollView } from "react-native-gesture-handler"

const Stack = createStackNavigator()
interface ScreenWithHeaderAndFooterProps {
	children: ReactNode
}
function ScreenWithHeaderAndFooter({
	children,
}: ScreenWithHeaderAndFooterProps) {
	return (
        <>
        <View style={{backgroundColor: "#fff", height: "100%"}}>
			<HeaderView />
			{children}
            <FooterView />
        </View>
        </>
	)
}

export default function App() {
	return (
        <SafeAreaProvider>
            <NavigationContainer>
                <View style={{ height: 45 }}>
                    <StatusBar backgroundColor="white" />
                </View>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name="Home">
                        {() => (
                            <ScreenWithHeaderAndFooter>
                                <ScrollView>
                                    <Categories></Categories>
                                    <Block></Block>
                                    <Block></Block>
                                    <Block></Block>
                                    <Block></Block>
                                    <Block></Block>
                                </ScrollView>
                            </ScreenWithHeaderAndFooter>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="Diary">
                        {() => (
                            <ScreenWithHeaderAndFooter>
                                <Diary />
                            </ScreenWithHeaderAndFooter>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="Maps">
                        {() => (
                            <ScreenWithHeaderAndFooter>
                                <Map />
                            </ScreenWithHeaderAndFooter>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="Compass">
                        {() => (
                            <ScreenWithHeaderAndFooter>
                                <Compass />
                            </ScreenWithHeaderAndFooter>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="Help">
                        {() => (
                            <ScreenWithHeaderAndFooter>
                                <Help />
                            </ScreenWithHeaderAndFooter>
                        )}
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
	)
}
