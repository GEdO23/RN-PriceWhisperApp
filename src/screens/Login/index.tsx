import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { LinkParam } from '~/components/Link';
import { FIREBASE_AUTH } from 'utils/firebase';
import { Alert, SafeAreaView, StyleSheet } from 'react-native'
import { ButtonList, ButtonListProps, Form, InputList, InputListProps } from '~/components/Form';
import { LoginScreenNavigationProps } from '~/navigation/props';
import { User, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { lightColor } from '~/components/Styles';


/**
 * The `LoginScreen` which allows the user to log in it's account #5
 * 
 * @requires `CRN`
 * @requires `password`
 * 
 * @returns The `LoginScreen`
 */
export default function LoginScreen() {
    const navigation = useNavigation<LoginScreenNavigationProps>();

    const auth = FIREBASE_AUTH

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    /** Asynchronous function that handles the login */
    async function handleLogin() {
        try {
            const result = await signInWithEmailAndPassword(auth, email, senha);
            if (result) navigation.push('App');
            else throw new Error("Erro no result")

        } catch (error) {
            console.log("Erro ao autenticar usuario: " + error);
        }
    }

    /** Asynchronous function that handles the `forgotPassword` action */
    async function handleForgotPassword() {
        try {
            if (email.length > 5) {
                await sendPasswordResetEmail(auth, email);
                Alert.alert(
                    'Email de confirmação',
                    'Um email de confirmação foi enviado a ' + email,
                    [{ text: 'Ok' }]
                )
                console.log('Chegou')
            } else {
                Alert.alert(
                    'Erro no envio!',
                    'Favor informar para qual email vemos enviar o link de confirmação para resetar sua senha...',
                    [{ text: 'Ok' }]
                )
                console.log('Não chegou')
            }
        } catch (error) {
            console.log("Erro ao tentar processar request de forgotpassword: " + error)
        }
    }

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
                value: senha,
                setValue: setSenha,
                isSecured: true,
                textBelow: {
                    text: 'Esqueceu sua senha?',
                    onPress: () => handleForgotPassword()
                }
            }
        ],
        buttonList: [
            {
                buttonId: 1,
                title: 'Entrar',
                onPress: () => handleLogin(),
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