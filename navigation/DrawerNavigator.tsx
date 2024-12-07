// navigation/DrawerNavigator.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../src/screens/HomeScreen';
import History from '../src/screens/HistoryScreen';
import ProfileScreen from '../src/screens/ProfileScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="History" component={History} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
