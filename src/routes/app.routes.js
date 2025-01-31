import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Categorys from '../pages/Categorys';
import Detail from '../pages/Detail';
import Favorites from '../pages/Favorites';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ 
                headerTitleStyle: {
                    color: '#fff',
                    fontSize: 30,
                },
                headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#050B18'
                    }
             }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Search"
                component={Search}
                options={{ 
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#050B18'
                    }
                 }}
            />
            <Stack.Screen
                name="Categorys"
                component={Categorys}
                options={({ route }) => ({ title: route.params.data.name })}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{ 
                    headerShown: false,
                 }}
            />
            <Stack.Screen
                name="Favorites"
                component={Favorites}
                options={{ 
                    headerTintColor: '#fff',
                    title: 'My Favorites',
                    headerStyle: {
                        backgroundColor: '#050B18'
                    }
                 }}
            />
        </Stack.Navigator>
    )
}