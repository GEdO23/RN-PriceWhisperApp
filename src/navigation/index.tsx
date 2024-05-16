import React from 'react';

/* NAVIGATION */
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList, RootStackParamList } from './props';

/* COMPONENTS */
import { Ionicons } from '@expo/vector-icons';
import { brandColor, darkColor } from '~/components/Styles';
import { AuthHeader } from '~/components/Header';

/* PROVIDERS */
import UserProvider from '~/provider/UserProvider';

/* SCREENS */
import InitialScreen from '~/screens/Initial';
import SignupScreen from '~/screens/Signup';
import LoginScreen from '~/screens/Login';
import SettingsScreen from '~/screens/App/Settings';
import ProductListScreen from '~/screens/App/Products';
import DashboardScreen from '~/screens/App/Dashboard';
import AccountScreen from '~/screens/App/Account';


const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootBottomTabParamList>();


const StackConfig: StackNavigationOptions = { headerShown: false, }

const BottomTabConfig: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: brandColor,
    tabBarInactiveTintColor: darkColor,
    tabBarIcon: ({ focused, color, size }) => {
        if (focused) return <Ionicons name='ellipse' color={color} size={size} />
        return <Ionicons name='ellipse-outline' color={color} size={size} />
    },
}


const RootTab = () => {
    return (
        <Tab.Navigator initialRouteName='ProductListScreen' screenOptions={BottomTabConfig}>
            <Tab.Screen name='SettingsScreen' component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) return <Ionicons name='settings' color={color} size={size} />
                        return <Ionicons name='settings-outline' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen name='ProductListScreen' component={ProductListScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) return <Ionicons name='pricetags' color={color} size={size} />
                        return <Ionicons name='pricetags-outline' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen name='DashboardScreen' component={DashboardScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) return <Ionicons name='podium' color={color} size={size} />
                        return <Ionicons name='podium-outline' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen name='AccountScreen' component={AccountScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) return <Ionicons name='person-circle' color={color} size={size} />
                        return <Ionicons name='person-circle-outline' color={color} size={size} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export const RootStack = () => {
    return (
        <NavigationContainer>
            <UserProvider>
                <Stack.Navigator initialRouteName="InitialScreen" screenOptions={StackConfig}>
                    <Stack.Screen name="InitialScreen" component={InitialScreen} />
                    <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ header: AuthHeader }} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ header: AuthHeader }} />
                    <Stack.Screen name="App" component={RootTab} />
                </Stack.Navigator>
            </UserProvider>
        </NavigationContainer>
    );
}