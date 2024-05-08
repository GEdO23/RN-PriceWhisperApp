import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { BackButton } from '~/components/BackButton';
import { Cadastro } from '~/screens/Cadastro';
import { Inicio } from '~/screens/Inicio';
import { Login } from '~/screens/Login';
import { Produtos } from '~/screens/Produtos';

export type RootStackParamList = {
    Inicio: undefined;
    Cadastro: undefined;
    Login: undefined;
    Configuracoes: undefined;
    Notificacoes: undefined;
    Produtos: undefined;
    Produto: undefined;
    Dashboard: undefined;
    Usuario: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const BottomTabs = createBottomTabNavigator<RootStackParamList>();

export function RootTab() {
    return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen
                name='Produtos'
                component={Produtos}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused, color, size}) => {
                        if (focused) {
                            return <Ionicons name='storefront' color={color} size={size}/>
                        }
                        return <Ionicons name='storefront-outline' color={color} size={size} />
                    }
                }}
            />
        </BottomTabs.Navigator>
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
                    name="Produtos"
                    component={RootTab}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
