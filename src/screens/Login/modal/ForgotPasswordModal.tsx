import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Button from '~/components/Button'
import { ModalContainer } from '~/components/Container'
import Input from '~/components/Input'
import MyStyleSheet from '~/components/MyStyleSheet'
import { UserContext } from '~/provider/UserProvider'

type ForgotPasswordProps = {
    setShowModal: (value: boolean) => void;
}

export default function ForgotPasswordModal({ setShowModal }: ForgotPasswordProps) {
    const { email, setEmail, handleForgotPassword } = useContext(UserContext)

    return (
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
                <Button title='Enviar' onPress={() => handleForgotPassword(setShowModal)} buttonStyle={{ border: MyStyleSheet.Color.BRAND, textColor: MyStyleSheet.Color.BRAND, style: { flex: 1, } }} />
            </View>
        </ModalContainer>
    )
}

const styles = StyleSheet.create({
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