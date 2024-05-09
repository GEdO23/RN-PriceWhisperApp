import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from '~/components/Button'
import { SecureInput } from '~/components/SecureInput';
import { RootStackParamList } from '~/navigation';

type CadastroScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Cadastro'>;

export function Cadastro() {
    const navigation = useNavigation<CadastroScreenNavigationProps>();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");

    const handleCadastro = () => {
        navigation.push('Produtos')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>PriceWhisper</Text>

            <View style={styles.form}>
                <View style={styles.inputList}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput
                            placeholder='Seu nome...'
                            spellCheck={false}
                            value={nome}
                            onChangeText={(text) => setNome(text)}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput
                            placeholder='Seu e-mail...'
                            spellCheck={false}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>CNPJ</Text>
                        <SecureInput
                            placeholder='Seu cnpj...'
                            value={cnpj}
                            setValue={setCnpj}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Senha</Text>
                        <SecureInput
                            placeholder='Sua senha...'
                            value={senha}
                            setValue={setSenha}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Confirmar senha</Text>
                        <SecureInput
                            placeholder='Sua senha...'
                            value={confirmSenha}
                            setValue={setConfirmSenha}
                        />
                    </View>
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
    input: {
        borderBottomColor: '#9D9D9D',
        borderBottomWidth: 1,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputContainer: {
        gap: 10,
    },
    inputList: {
        gap: 20,
        marginBottom: 50,
    },
    label: {
        fontWeight: '600',
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: 80,
    }
})