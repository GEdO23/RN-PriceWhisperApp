import React, { useContext } from 'react'

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProps } from '~/navigation/props';

/* COMPONENTS */
import { SafeAreaView, StyleSheet } from 'react-native'
import Form, { ButtonList, ButtonListProps, InputList, InputListProps } from '~/components/Form';
import { LinkParam } from '~/components/Link';
import { lightColor } from '~/components/Styles';

/* CONTEXT */
import { UserContext } from '~/provider/UserProvider';


/**
 * The login screen which allows the user to log in #5
 * @returns The login screen JSX element
 */
export default function LoginScreen() {
    const navigation = useNavigation<AppNavigationProps>();

    const {
        email, setEmail,
        password, setPassword,
        handleLogin, handleForgotPassword
    } = useContext(UserContext)

    /** Data used for the login form */
    const loginForm: InputListProps & ButtonListProps & LinkParam = {
        inputList: [
            {
                id: 1,
                label: 'Email',
                placeholder: 'Insira seu email',
                value: email,
                setValue: setEmail, isSecured: false
            },
            {
                id: 2,
                label: 'Senha',
                placeholder: 'Insira sua senha',
                value: password,
                setValue: setPassword,
                isSecured: true,
                textBelow: {
                    text: 'Esqueceu sua senha?',
                    onPress: () => handleForgotPassword(email)
                }
            }
        ],
        buttonList: [
            {
                buttonId: 1,
                title: 'Entrar',
                onPress: () => handleLogin(email, password),
                buttonStyle: {
                    background: '#EF4023',
                    border: 'transparent',
                    textColor: '#FFFFFF'
                }
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
            <Form>
                <InputList inputList={loginForm.inputList} link={loginForm.link} />
                <ButtonList buttonList={loginForm.buttonList} />
            </Form>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: lightColor,
        flex: 1,
        paddingBottom: 60,
        paddingHorizontal: 20,
    }
})