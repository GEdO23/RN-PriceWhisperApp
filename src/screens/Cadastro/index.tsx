import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from '~/components/Button'

export function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");

    const handleCadastro = () => {
        alert('Cadastrado com sucesso!');
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
                        <TextInput
                            placeholder='Seu CNPJ...'
                            secureTextEntry
                            spellCheck={false}
                            value={cnpj}
                            onChangeText={(text) => setCnpj(text)}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput
                            placeholder='Sua senha...'
                            secureTextEntry
                            spellCheck={false}
                            value={senha}
                            onChangeText={(text) => setSenha(text)}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Confirmar senha</Text>
                        <TextInput
                            placeholder='Confirmar senha...'
                            secureTextEntry
                            spellCheck={false}
                            value={confirmSenha}
                            onChangeText={(text) => setConfirmSenha(text)}
                            style={styles.input}
                        />
                    </View>
                </View>

                <Button title='Criar conta' onPress={handleCadastro} disabled />
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