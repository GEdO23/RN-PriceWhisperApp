import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { ButtonListProps, Form, InputListProps } from '~/components/Form';
import { LoginScreenNavigationProps } from '~/navigation/props';
import { FIREBASE_AUTH } from 'utils/firebase';
import { LinkParam } from '~/components/Link';


/**
 * The `LoginScreen` which allows the user to log in it's account #5
 * 
 * @requires `CRN`
 * @requires `password`
 * 
 * @returns The `LoginScreen`
 */
export function LoginScreen() {
    const navigation = useNavigation<LoginScreenNavigationProps>();

    const [cnpj, setCnpj] = useState("");
    const [senha, setSenha] = useState("");

    async function handleLogin() {

    }

    const loginForm: InputListProps & ButtonListProps & LinkParam = {
        inputList: [
            {
                id: 1,
                label: 'CNPJ',
                placeholder: 'XX.XXX.XXX/XXXX-XX',
                value: cnpj,
                setValue: setCnpj,
                isSecured: true
            },
            {
                id: 2,
                label: 'Senha',
                placeholder: 'Insira sua senha',
                value: senha,
                setValue: setSenha,
                isSecured: true
            }
        ],
        buttonList: [
            {
                id: 1,
                title: 'Entrar',
                onPress: handleLogin
            }
        ],
        link: {
            firstText: 'Não possui uma conta?',
            linkText: 'Cadastre-se',
            navigate: () => navigation.navigate('SignupScreen')
        }
    }

    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.title}>PriceWhisper</Text>
            <Form
                inputList={loginForm.inputList}
                buttonList={loginForm.buttonList}
                link={loginForm.link}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        flex: 1,
        paddingBottom: 60,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: 80,
    }
})