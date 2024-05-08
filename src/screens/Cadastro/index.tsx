import React from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from '~/components/Button'

export function Cadastro() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>PriceWhisper</Text>

            <View style={styles.form}>
                <View style={styles.inputList}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput placeholder='Seu nome...' style={styles.input} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput placeholder='Seu e-mail...' style={styles.input} inputMode='email' />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>CNPJ</Text>
                        <TextInput placeholder='Seu CNPJ...' style={styles.input} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput placeholder='Sua senha...' style={styles.input} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Confirmar senha</Text>
                        <TextInput placeholder='Confirmar senha...' style={styles.input} />
                    </View>
                </View>

                <Button title='Criar conta' />
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