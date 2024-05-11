import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* SCREENS */
import { InitialScreen } from '~/screens/Initial';
import { SignupScreen } from '~/screens/Signup';
import { LoginScreen } from '~/screens/Login';
import { ProductsScreen } from '~/screens/Products';
import { DashboardScreen } from '~/screens/Dashboard';
import { AccountScreen } from '~/screens/Account';
import { SettingsScreen } from '~/screens/Settings';

type RootStackParamList = {
    InitialScreen: undefined;
    SignupScreen: undefined;
    LoginScreen: undefined;
    App: undefined;
    NotificationsScreen: undefined;
};

type RootTabParamList = {
    SettingsScreen: undefined;
    ProductsScreen: undefined;
    ProductScreen: undefined;
    DashboardScreen: undefined;
    AccountScreen: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();


const RootTab = () => {
    return (
        <Tab.Navigator initialRouteName='ProductsScreen'>
            <Tab.Screen
                name='SettingsScreen'
                component={SettingsScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return <Ionicons name='cog' color={color} size={size} />
                        }
                        return <Ionicons name='cog-outline' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name='ProductsScreen'
                component={ProductsScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return <Ionicons name='storefront' color={color} size={size} />
                        }
                        return <Ionicons name='storefront-outline' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name='DashboardScreen'
                component={DashboardScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return <Ionicons name='podium' color={color} size={size} />
                        }
                        return <Ionicons name='podium-outline' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name='AccountScreen'
                component={AccountScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return <Ionicons name='person-circle' color={color} size={size} />
                        }
                        return <Ionicons name='person-circle-outline' color={color} size={size} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="InitialScreen" >
                <Stack.Screen
                    name="InitialScreen"
                    component={InitialScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="SignupScreen"
                    component={SignupScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{
                        headerShown: false,
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

export { RootStack, RootTab, RootStackParamList, RootTabParamList }