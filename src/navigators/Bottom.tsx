import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../views/Home";
import Profile from "../views/Profile";
import { Edit } from "../views/Edit";

const Bottom = createBottomTabNavigator();

export const BottomTab =()=>{
    return(
        <Bottom.Navigator>
            <Bottom.Screen name="HomeBottom" component={Home}/>
            <Bottom.Screen name="ProfileBottom" component={Profile}/>
            <Bottom.Screen name="EditBottom" component={Edit}/>
        </Bottom.Navigator>
    )
}