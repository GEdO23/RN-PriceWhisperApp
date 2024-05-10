import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { FIREBASE_DATABASE } from 'utils/firebase';
import { ButtonListAtributes, Form, InputListAtributes } from '~/components/Form';
import { RootStackParamList } from '~/navigation';

type LoginScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Cadastro'>;

export function Login() {
    const navigation = useNavigation<LoginScreenNavigationProps>();

    const [cnpj, setCnpj] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = async () => {
    }

    const cadastroForm: InputListAtributes & ButtonListAtributes = {
        inputList: [
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
            }
        ],
        buttonList: [
            {
                title: 'Entrar',
                onPress: handleLogin
            }
        ]
    }

    return (
        <SafeAreaView style={styles.container} >
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
