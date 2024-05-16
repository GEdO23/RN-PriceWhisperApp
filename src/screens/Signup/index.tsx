import { useState } from 'react'

// Navigation
import { useNavigation } from '@react-navigation/native';
import { SignupScreenNavigationProps } from '~/navigation/props';

// Components
import { Alert, SafeAreaView, StyleSheet } from 'react-native'

// Firebase
import { ButtonList, ButtonListProps, Form, InputList, InputListProps } from '~/components/Form';
import { LinkParam } from '~/components/Link';
import { FIREBASE_AUTH, FIREBASE_DATABASE } from 'utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';


/**
 * The `SignupScreen` which allows the user to create a new account #4 #9
 * 
 * @requires `username`
 * @requires `email`
 * @requires `CRN`
 * @requires `password`
 * @requires `repeatPassword`
 * 
 * @returns The `SignupScreen`
 */
export default function SignupScreen() {
    const navigation = useNavigation<SignupScreenNavigationProps>();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");

    async function handleCadastro() {
        createUserWithEmailAndPassword(FIREBASE_AUTH, email, senha).then(async cred => {
            const docRef = doc(FIREBASE_DATABASE, 'usuarios', cred.user.uid)
            await setDoc(docRef, {
                nome: nome,
                email: email,
                cnpj: cnpj,
                senha: senha,
            }, { merge: true });
        }).catch(error => {
            console.log("Erro ao cadastrar: " + error);
            Alert.alert('Erro', 'Erro no cadastro', [
                { text: 'Tentar novamente', onPress: () => handleCadastro(), isPreferred: true },
                { text: 'Ok' }
            ])
        })
    }

    const cadastroForm: InputListProps & ButtonListProps & LinkParam = {
        inputList: [
            { id: 1, label: 'Nome', placeholder: 'Insira seu nome', value: nome, setValue: setNome, isSecured: false, },
            { id: 2, label: 'Email', placeholder: 'Insira seu email', value: email, setValue: setEmail, isSecured: false, },
            { id: 3, label: 'CNPJ', placeholder: 'XX.XXX.XXX/XXXX-XX', value: cnpj, setValue: setCnpj, isSecured: true, },
            { id: 4, label: 'Senha', placeholder: 'Insira sua senha', value: senha, setValue: setSenha, isSecured: true, },
            { id: 5, label: 'Confirmar senha', placeholder: 'Repetir senha', value: confirmSenha, setValue: setConfirmSenha, isSecured: true, }
        ],
        buttonList: [
            {
                buttonId: 1,
                title: 'Criar conta',
                onPress: () => handleCadastro(),
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