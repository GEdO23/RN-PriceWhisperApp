import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { ButtonListProps, Form, InputListProps } from '~/components/Form';
import { LoginScreenNavigationProps } from '~/navigation/props';
import { FIREBASE_AUTH } from 'utils/firebase';
import { LinkParam } from '~/components/Link';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';


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

    const auth = FIREBASE_AUTH

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function handleLogin() {
        try {
            const result = await signInWithEmailAndPassword(auth, email, senha);
            if (result) navigation.push('App');
            else throw new Error("Erro no result")

        } catch (error) {
            console.log("Erro ao autenticar usuario: " + error);
        }
    }

    async function handleForgotPassword() {
        try {
            await sendPasswordResetEmail(auth, email);
            alert('Foi enviado um email para resetar sua senha')

        } catch (error) {
            console.log("Erro ao enviar forgotpassword: " + error);
        }
    }

    const loginForm: InputListProps & ButtonListProps & LinkParam = {
        inputList: [
            { id: 1, label: 'Email', placeholder: 'Insira seu email', value: email, setValue: setEmail, isSecured: false, },
            { id: 2, label: 'Senha', placeholder: 'Insira sua senha', value: senha, setValue: setSenha, isSecured: true, textBelow: { text: 'Esqueceu sua senha?', onPress: handleForgotPassword } }
        ],
        buttonList: [
            { buttonId: 1, title: 'Entrar', onPress: handleLogin, btnStyle: { background: '#EF4023', border: 'transparent', textColor: '#FFFFFF' } }
        ],
        link: { firstText: 'Não possui uma conta?', linkText: 'Cadastre-se', navigate: () => navigation.navigate('SignupScreen') }
    }

    return (
        <SafeAreaView style={styles.container} >
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
    }
})