import * as SplashScreen from "expo-splash-screen"
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
import Maps from "components/Maps"
import Help from "components/Help"
import Main from "components/Main"
import OpenedBlock from "components/OpenedBlock"
import Block from "components/Block"
import Categories from "components/Categories"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { FlatList, ScrollView } from "react-native-gesture-handler"
import { data } from "components/data"
import LoadingScreen from "components/LoadingScreen"
import { AppProvider, useAppContext } from "components/AppContext"
import ScreenWithHeaderAndFooter from "components/ScreenWithHeaderAndFooter"

const Stack = createStackNavigator()

export default function App() {
    const [isShowSplash, setIsShowSplash] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsShowSplash(false)
        }, 2000)
    })

	return (
        <AppProvider>
        {isShowSplash ? <LoadingScreen /> :
        <SafeAreaProvider>
        <NavigationContainer>
            <View style={{ height: 45 }}>
                <StatusBar backgroundColor="white" />
            </View>
            <Stack.Navigator
                initialRouteName="Main"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Maps" component={Maps}>
                </Stack.Screen>
                <Stack.Screen name="Main" component={Main}>
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
                <Stack.Screen name="OpenedBlock">
                    {({navigation, route}) => (
                        <ScreenWithHeaderAndFooter>
                            <OpenedBlock route={route}/>
                        </ScreenWithHeaderAndFooter>
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
        }
        </AppProvider>
	)
}
