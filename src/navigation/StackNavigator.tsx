import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Favorites } from '../views/Favorites';
import { Movie } from '../views/Movie';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Movie' component={Movie} options={{ headerShown: false }} />
            <Stack.Screen name='Favorites' component={Favorites} />
        </Stack.Navigator>
    )
}

export default StackNavigator;