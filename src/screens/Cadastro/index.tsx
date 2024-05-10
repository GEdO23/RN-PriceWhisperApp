import { useState } from 'react'

// Navegação
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '~/navigation';

// Componentes
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from '~/components/Button'
import { Input, SecureInput } from '~/components/Input';

// Firebase
import { FIREBASE_DATABASE } from 'utils/firebase';
import { addDoc, collection, doc } from 'firebase/firestore';
import { ButtonListAtributes, Form, InputListAtributes } from '~/components/Form';

type CadastroScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Cadastro'>;

export function Cadastro() {
    const navigation = useNavigation<CadastroScreenNavigationProps>();

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

    const cadastroForm: InputListAtributes & ButtonListAtributes = {
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
        <View style={styles.container}>
            <Text style={styles.title}>PriceWhisper</Text>

            <Form
                inputList={cadastroForm.inputList}
                buttonList={cadastroForm.buttonList}
            />
        </View>
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