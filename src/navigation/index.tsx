import React from 'react';

/* NAVIGATION */
import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProductStackParamList, RootBottomTabParamList, RootStackParamList } from './props';

/* COMPONENTS */
import { Ionicons } from '@expo/vector-icons';
import { AuthHeader } from '~/components/Header';
import { Color } from '~/components/Styles';

/* PROVIDERS */
import UserProvider from '~/provider/UserProvider';

/* SCREENS */
import InitialScreen from '~/screens/Initial';
import SignupScreen from '~/screens/Signup';
import LoginScreen from '~/screens/Login';
import SettingsScreen from '~/screens/App/Settings';
import ProductListScreen from '~/screens/App/ProductList';
import DashboardScreen from '~/screens/App/Dashboard';
import AccountScreen from '~/screens/App/Account';
import ProductDetailScreen from '~/screens/App/ProductList/Product';


const MyTheme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Color.PRIMARY,
        primary: Color.BRAND,
        text: Color.SECONDARY,
    }
}


const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootBottomTabParamList>();
const ProdStack = createStackNavigator<ProductStackParamList>();


const BottomTabConfig: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    tabBarIcon: ({ focused, color, size }) => {
        if (focused) return <Ionicons name='ellipse' color={color} size={size} />
        return <Ionicons name='ellipse-outline' color={color} size={size} />
    },
}

const RootProductStack = () => {
    return (
        <ProdStack.Navigator initialRouteName='ProductListScreen'>
            <ProdStack.Screen name='ProductListScreen' component={ProductListScreen} options={{
                title: 'Produtos',
                headerLeft: () => <></>
            }} />
            <ProdStack.Screen name='ProductScreen' component={ProductDetailScreen} options={{
                title: `Produtos    >   Arroz`,
            }} />
        </ProdStack.Navigator>
    )
}


const RootTab = () => {
    return (
        <Tab.Navigator initialRouteName='ProductsScreen' screenOptions={BottomTabConfig}>
            <Tab.Screen name='SettingsScreen' component={SettingsScreen}
                options={{
                    title: 'Configurações',
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) return <Ionicons name='settings' color={color} size={size} />
                        return <Ionicons name='settings-outline' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen name='ProductsScreen' component={RootProductStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) return <Ionicons name='pricetags' color={color} size={size} />
                        return <Ionicons name='pricetags-outline' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen name='DashboardScreen' component={DashboardScreen}
                options={{
                    title: 'Dashboard',
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) return <Ionicons name='podium' color={color} size={size} />
                        return <Ionicons name='podium-outline' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen name='AccountScreen' component={AccountScreen}
                options={{
                    title: 'Perfil',
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
        <NavigationContainer theme={MyTheme}>
            <UserProvider>
                <Stack.Navigator initialRouteName="App">
                    <Stack.Screen name="InitialScreen" component={InitialScreen} options={{ headerShown: false, }} />
                    <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ header: AuthHeader }} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ header: AuthHeader }} />
                    <Stack.Screen name="App" component={RootTab} options={{ headerShown: false, }} />
                </Stack.Navigator>
            </UserProvider>
        </NavigationContainer>
    );
}