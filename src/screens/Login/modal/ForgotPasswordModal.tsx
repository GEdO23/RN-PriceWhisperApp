import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Button from '~/components/Button'
import { ModalContainer } from '~/components/Container'
import Input from '~/components/Input'
import MyStyleSheet from '~/components/Styles'

type ForgotPasswordProps = {
    email: string;
    setEmail: (value: string) => void;
    setShowModal: (value: boolean) => void;
}

export default function ForgotPasswordModal({ email, setEmail, setShowModal }: ForgotPasswordProps) {
    return (
        <View style={styles.container}>
            <ModalContainer>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Esqueceu sua senha?</Text>
                    <Text style={styles.desc}>Informe seu email para que possa alterar sua senha!</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Input label='Email' placeholder='Insira seu email aqui' value={email} setValue={setEmail} />
                </View>

                <View style={styles.buttonListContainer}>
                    <Button title='Cancelar' onPress={() => setShowModal(false)} buttonStyle={{ border: MyStyleSheet.Color.GRAY, textColor: MyStyleSheet.Color.GRAY, style: { flex: 1, } }} />
                    <Button title='Enviar' buttonStyle={{ border: MyStyleSheet.Color.BRAND, textColor: MyStyleSheet.Color.BRAND, style: { flex: 1, } }} />
                </View>
            </ModalContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .5)',
    },
    inputContainer: {
        paddingHorizontal: 10,
    },
    buttonListContainer: {
        flexDirection: 'row',
        gap: 25,
    },
    textContainer: {
        gap: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
    },
    desc: {
        fontSize: 16,

    },
})