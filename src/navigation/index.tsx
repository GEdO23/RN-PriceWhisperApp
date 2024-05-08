import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BackButton } from '~/components/BackButton';
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
                    options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <BackButton onPress={navigation.goBack} />
                    })}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={({ navigation }) => ({
                        headerLeft: () => <BackButton onPress={navigation.goBack} />
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
