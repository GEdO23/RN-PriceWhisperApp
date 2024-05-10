import { Ionicons } from '@expo/vector-icons';
import { IconProps } from '@expo/vector-icons/build/createIconSet';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { BackButton } from '~/components/BackButton';
import { Cadastro } from '~/screens/Cadastro';
import { Configuracoes } from '~/screens/Configuracoes';
import { Dashboard } from '~/screens/Dashboard';
import { Inicio } from '~/screens/Inicio';
import { Login } from '~/screens/Login';
import { Produtos } from '~/screens/Produtos';
import { Usuario } from '~/screens/Usuario';

export type RootStackParamList = {
    Inicio: undefined;
    Cadastro: undefined;
    Login: undefined;
    App: undefined;
};

export type RootTabParamList = {
    Configuracoes: undefined;
    Notificacoes: undefined;
    Produtos: undefined;
    Produto: undefined;
    Dashboard: undefined;
    Usuario: undefined;
}

type TabAtributes = {
    name: keyof (RootTabParamList);
    component: any;
    iconName: {
        'on': any;
        'off': any;
    };
}

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

export function RootTab() {

    return (
        <Tab.Navigator initialRouteName='Produtos'>
            <Tab.Screen
                name='Configuracoes'
                component={Configuracoes}
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
                name='Produtos'
                component={Produtos}
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
                name='Dashboard'
                component={Dashboard}
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
                name='Usuario'
                component={Usuario}
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

export default function RootStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio" >
                <Stack.Screen
                    name="Inicio"
                    component={Inicio}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
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
