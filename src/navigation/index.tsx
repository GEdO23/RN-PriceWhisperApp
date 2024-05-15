import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList, RootStackParamList } from './props';
import { brandColor, darkColor, lightColor } from '~/components/Styles';
import { AuthHeader } from '~/components/Header';


/* SCREENS */
import InitialScreen from '~/screens/Initial';
import SignupScreen from '~/screens/Signup';
import LoginScreen from '~/screens/Login';
import AccountScreen from '~/screens/Account';
import DashboardScreen from '~/screens/Dashboard';
import ProductsScreen from '~/screens/Products';
import SettingsScreen from '~/screens/Settings';


const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const BottomTabConfig: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: brandColor,
    tabBarInactiveTintColor: darkColor,
    tabBarIcon: ({ focused, color, size }) => {
        return focused ?
            <Ionicons name='ellipse' color={color} size={size} /> :
            <Ionicons name='ellipse-outline' color={color} size={size} />
    },
    
}


const RootTab = () => {
    return (
        <Tab.Navigator initialRouteName='ProductsScreen' screenOptions={BottomTabConfig}>
            <Tab.Screen
                name='SettingsScreen'
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return focused ?
                            <Ionicons name='settings' color={color} size={size} /> :
                            <Ionicons name='settings-outline' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name='ProductsScreen'
                component={ProductsScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return focused ?
                            <Ionicons name='pricetags' color={color} size={size} /> :
                            <Ionicons name='pricetags-outline' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name='DashboardScreen'
                component={DashboardScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return focused ?
                            <Ionicons name='podium' color={color} size={size} /> :
                            <Ionicons name='podium-outline' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name='AccountScreen'
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return focused ?
                            <Ionicons name='person-circle' color={color} size={size} /> :
                            <Ionicons name='person-circle-outline' color={color} size={size} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="InitialScreen">
                <Stack.Screen
                    name="InitialScreen"
                    component={InitialScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="SignupScreen"
                    component={SignupScreen}
                    options={{
                        header: AuthHeader
                    }}
                />
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{
                        header: AuthHeader
                    }}
                />
                <Stack.Screen
                    name="App"
                    component={RootTab}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}