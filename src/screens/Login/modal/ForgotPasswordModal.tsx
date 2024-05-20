import { sendPasswordResetEmail } from 'firebase/auth'
import React, { useContext } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { auth } from 'utils/firebase'
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
                <Text style={MyStyleSheet.Text.SUBTITLE}>Esqueceu sua senha?</Text>
                <Text style={MyStyleSheet.Text.BASE}>Informe seu email para que possa alterar sua senha!</Text>
            </View>

            <Input label='Email' placeholder='Insira seu email aqui' value={email} setValue={setEmail} />

            <View style={styles.buttonListContainer}>
                <Button title='Cancelar' onPress={() => setShowModal(false)} buttonStyle={{ border: MyStyleSheet.Color.GRAY, textColor: MyStyleSheet.Color.GRAY, style: { flex: 1, } }} />
                <Button title='Enviar' onPress={async () => {
                    await sendPasswordResetEmail(auth, email)
                    .then(
                        // Success
                        () => {
                            Alert.alert('Email de confirmação', 'Um email de confirmação foi enviado a ' + email)
                        },
                        // Failure
                        (reason) => {
                            Alert.alert('Erro no envio!', reason);
                        })
        
                    .catch(error => {
                        console.log("Erro ao tentar processar request de forgotpassword: " + error)
        
                        Alert.alert('Erro no envio!', 'Alguma coisa deu errado...')
                    });
                }} buttonStyle={{ background: MyStyleSheet.Color.BRAND, textColor: MyStyleSheet.Color.WHITE, style: { flex: 1, } }} />
            </View>
        </ModalContainer>
    )
}

const styles = StyleSheet.create({
    buttonListContainer: {
        flexDirection: 'row',
        gap: 25,
    },
    textContainer: {
        gap: 10,
    },
})