import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DrawerNavigator } from "./navigators/Drawer";
import StackNavigator from "./navigators/Stack";

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})