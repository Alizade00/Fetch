import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../views/Home";
import Profile from "../views/Profile";
import { Edit } from "../views/Edit";
import DrawerNavigator from "./Drawer";
import { BottomTab } from "./Bottom";


const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="drawer" component={DrawerNavigator} options={{headerShown:false}}/>
            <Stack.Screen name="bottom" component={BottomTab} options={{headerShown:false}}/>
            <Stack.Screen name="homeview" component={Home} />
            <Stack.Screen name="profileview" component={Profile} />
            <Stack.Screen name="editview" component={Edit} />
        </Stack.Navigator>
    )
}

export default StackNavigator;