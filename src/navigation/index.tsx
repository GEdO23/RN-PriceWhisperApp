import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Cadastro } from '~/screens/Cadastro';
import { Inicio } from '~/screens/Inicio';
import { Login } from '~/screens/Login';

export type RootStackParamList = {
    Inicio: undefined;
    Cadastro: undefined;
    Login: undefined;
    Settings: undefined;
    Notifications: undefined;
    Products: undefined;
    Product: undefined;
    Dashboard: undefined;
    User: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio">
                <Stack.Screen name="Inicio" component={Inicio} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
