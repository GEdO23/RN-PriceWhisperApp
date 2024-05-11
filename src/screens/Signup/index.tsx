import { useState } from 'react'

// Navigation
import { useNavigation } from '@react-navigation/native';
import { SignupScreenNavigationProps } from '~/navigation/props';

// Components
import { SafeAreaView, StyleSheet, Text } from 'react-native'

// Firebase
import { FIREBASE_DATABASE } from 'utils/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { ButtonListProps, Form, InputListProps } from '~/components/Form';


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
const SignupScreen = () => {
    const navigation = useNavigation<SignupScreenNavigationProps>();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");

    const handleCadastro = async () => {
        try {
            await addDoc(collection(FIREBASE_DATABASE, 'usuarios'), {
                nome: nome,
                email: email,
                cnpj: cnpj,
                senha: senha,
                foto: 'assets/favicon.png',
                timestamp: new Date(),
            });
            navigation.push('App')

        } catch (error) {
            console.log("Erro ao cadastrar: " + error);
        }
    }

    const cadastroForm: InputListProps & ButtonListProps = {
        inputList: [
            {
                label: 'Nome',
                placeholder: 'Insira seu nome',
                value: nome,
                setValue: setNome,
                isSecured: false
            },
            {
                label: 'Email',
                placeholder: 'Insira seu email',
                value: email,
                setValue: setEmail,
                isSecured: false
            },
            {
                label: 'CNPJ',
                placeholder: 'XX.XXX.XXX/XXXX-XX',
                value: cnpj,
                setValue: setCnpj,
                isSecured: true
            },
            {
                label: 'Senha',
                placeholder: 'Insira sua senha',
                value: senha,
                setValue: setSenha,
                isSecured: true
            },
            {
                label: 'Confirmar senha',
                placeholder: 'Repetir senha',
                value: confirmSenha,
                setValue: setConfirmSenha,
                isSecured: true
            }
        ],
        buttonList: [
            {
                title: 'Criar conta',
                onPress: handleCadastro
            }
        ]
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>PriceWhisper</Text>

            <Form
                inputList={cadastroForm.inputList}
                buttonList={cadastroForm.buttonList}
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

export { SignupScreen }