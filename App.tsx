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
import Block from "./components/Block"
import Compass from "./components/Compass"
import Diary from "components/Diary"
import Help from "components/Help"
import Map from "components/Map"
import Home from "components/Home"
import OpenedBlock from "components/OpenedBlock"

const Stack = createStackNavigator()

interface ScreenWithHeaderAndFooterProps {
	children: ReactNode
}

function ScreenWithHeaderAndFooter({
	children,
}: ScreenWithHeaderAndFooterProps) {
	return (
		<>
			<HeaderView />
			{children}
			<FooterView />
		</>
	)
}

export default function App() {
	return (
		<NavigationContainer>
			<View style={{ height: 30 }}>
				<StatusBar backgroundColor="white" />
			</View>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="Home">
					{() => (
						<ScreenWithHeaderAndFooter>
							<OpenedBlock />
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
							<Help />
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
	)
}
