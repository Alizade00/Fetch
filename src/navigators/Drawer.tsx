import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Edit } from "../views/Edit";
import Home from "../views/Home";
import Profile from "../views/Profile";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="home" component={Home} />
            <Drawer.Screen name="profile" component={Profile} />
            <Drawer.Screen name="edit" component={Edit} />
        </Drawer.Navigator>
    )
};

export default DrawerNavigator;
