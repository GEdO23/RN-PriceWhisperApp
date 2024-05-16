import React, { useContext, useState } from 'react'

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
 * The sign up screen which allows the user to create a new account #4 #9
 * @returns The sign up screen JSX element
 */
export default function SignupScreen() {
    const navigation = useNavigation<AppNavigationProps>();

    const {
        name, setName,
        email, setEmail,
        password, setPassword,
        crn, setCrn,
        handleSignup
    } = useContext(UserContext);

    const [confirmPassword, setConfirmPassword] = useState('');

    const cadastroForm: InputListProps & ButtonListProps & LinkParam = {
        inputList: [
            { id: 1, label: 'Nome', placeholder: 'Insira seu nome', value: name, setValue: setName, isSecured: false, },
            { id: 2, label: 'Email', placeholder: 'Insira seu email', value: email, setValue: setEmail, isSecured: false, },
            { id: 3, label: 'CNPJ', placeholder: 'XX.XXX.XXX/XXXX-XX', value: crn, setValue: setCrn, isSecured: true, },
            { id: 4, label: 'Senha', placeholder: 'Insira sua senha', value: password, setValue: setPassword, isSecured: true, },
            { id: 5, label: 'Confirmar senha', placeholder: 'Repetir senha', value: confirmPassword, setValue: setConfirmPassword, isSecured: true, }
        ],
        buttonList: [
            {
                buttonId: 1,
                title: 'Criar conta',
                onPress: () => handleSignup(name, email, password, crn),
                buttonStyle: {
                    background: '#EF4023',
                    border: 'transparent',
                    textColor: '#FFFFFF'
                }
            }
        ],
        link: {
            firstText: 'Já possui uma conta?',
            linkText: 'Entrar',
            navigate: () => navigation.navigate('LoginScreen')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Form>
                <InputList inputList={cadastroForm.inputList} link={cadastroForm.link} />
                <ButtonList buttonList={cadastroForm.buttonList} />
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
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: 80,
    }
})