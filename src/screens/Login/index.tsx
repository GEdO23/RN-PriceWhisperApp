import React, { useContext, useState } from 'react'

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProps } from '~/navigation/props';

/* COMPONENTS */
import { Alert, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Form, InputList } from '~/components/Container';
import Input, { SecureInput } from '~/components/Input';
import Link from '~/components/Link';
import Button from '~/components/Button';
import MyStyleSheet from '~/components/MyStyleSheet';

/* CONTEXT */
import { UserContext } from '~/provider/UserProvider';
import ForgotPasswordModal from './modal/ForgotPasswordModal';


/**
 * The login screen which allows the user to log in #5
 * @returns The login screen JSX element
 */
export default function LoginScreen() {
    const navigation = useNavigation<AppNavigationProps>();

    const { email, setEmail, password, setPassword, handleLogin, handleForgotPassword } = useContext(UserContext)

    const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

    return (
        <SafeAreaView style={MyStyleSheet.Container.BASE} >
            <Form>
                <InputList>
                    <Input label='Email' placeholder='example@domain.com' value={email} setValue={setEmail} />
                    <SecureInput label='Senha' placeholder='Insira uma senha forte' value={password} setValue={setPassword} />
                    <TouchableOpacity onPress={() => handleForgotPassword(setShowForgotPasswordModal)}>
                        <Text style={MyStyleSheet.Text.LINK}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>

                    <Link backText='Não possui uma conta ainda?' linkText='Cadastre-se' link={() => navigation.navigate('SignupScreen')} />
                </InputList>

                <Button title='Entrar' onPress={() => handleLogin(email, password)} buttonStyle={{ background: MyStyleSheet.Color.BRAND, textColor: MyStyleSheet.Color.PRIMARY }} />
            </Form>
            <Modal visible={showForgotPasswordModal} transparent>
                <ForgotPasswordModal email={email} setEmail={setEmail} setShowModal={setShowForgotPasswordModal}/>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})