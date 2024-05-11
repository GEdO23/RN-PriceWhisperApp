import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList, RootStackParamList } from './props';


/* SCREENS */
import { InitialScreen } from '~/screens/Initial';
import { SignupScreen } from '~/screens/Signup';
import { LoginScreen } from '~/screens/Login';
import { ProductsScreen } from '~/screens/Products';
import { DashboardScreen } from '~/screens/Dashboard';
import { AccountScreen } from '~/screens/Account';
import { SettingsScreen } from '~/screens/Settings'

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootBottomTabParamList>();


function RootTab() {
    return (
        <Tab.Navigator initialRouteName='ProductsScreen'>
            <Tab.Screen
                name='SettingsScreen'
                component={SettingsScreen}
                options={{
                    headerTitle: 'Configurações',
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
                    headerTitle: 'Produtos',
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
                    headerTitle: 'Dashboard',
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
                    headerTitle: 'Perfil',
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

export function RootStack() {
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
