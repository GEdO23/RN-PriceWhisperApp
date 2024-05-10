import { useState } from 'react'

// Navegação
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '~/navigation';

// Componentes
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from '~/components/Button'
import { Input, SecureInput } from '~/components/Input';

// Firebase
import { FIREBASE_DATABASE } from 'utils/firebase';
import { addDoc, collection, doc } from 'firebase/firestore';

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

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>PriceWhisper</Text>

            <View style={styles.form}>
                <View style={styles.inputList}>
                    <Input
                        label='Nome'
                        placeholder='Seu nome...'
                        value={nome}
                        setValue={setNome}
                    />
                    <Input
                        label='Email'
                        placeholder='Seu email...'
                        value={email}
                        setValue={setEmail}
                    />
                    <SecureInput
                        label='CNPJ'
                        placeholder='Seu CNPJ...'
                        value={cnpj}
                        setValue={setCnpj}
                    />
                    <SecureInput
                        label='Senha'
                        placeholder='Sua senha...'
                        value={senha}
                        setValue={setSenha}
                    />
                    <SecureInput
                        label='Confirmar senha'
                        placeholder='Confirmar senha...'
                        value={confirmSenha}
                        setValue={setConfirmSenha}
                    />
                </View>

                <Button
                    title='Criar conta'
                    onPress={handleCadastro}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        flex: 1,
        paddingBottom: 60,
        paddingHorizontal: 20,
    },
    form: {
        width: '100%',
    },
    inputList: {
        gap: 20,
        marginBottom: 50,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: 80,
    }
})