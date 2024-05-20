import React, { useContext, useState } from 'react'

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProps } from '~/navigation/props';

/* COMPONENTS */
import { SafeAreaView, StyleSheet } from 'react-native'
import { Form, InputList } from '~/components/Container';
import Input from '~/components/Input';
import Link from '~/components/Link';
import Button from '~/components/Button';
import MyStyleSheet from '~/components/MyStyleSheet';

/* CONTEXT */
import { UserContext } from '~/provider/UserProvider';


/**
 * The sign up screen which allows the user to create a new account #4 #9
 * @returns The sign up screen JSX element
 */
export default function SignupScreen() {
    const navigation = useNavigation<AppNavigationProps>();

    const { name, setName, email, setEmail, password, setPassword, crn, setCrn, handleSignup } = useContext(UserContext);

    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <Form>
                <InputList>
                    <Input label='Nome' placeholder='Insira seu nome' value={name} setValue={setName} />
                    <Input label='Email' placeholder='example@domain.com' value={email} setValue={setEmail} />
                    <Input label='CNPJ' placeholder='xx.xxx.xxx/xxxx-xx' value={crn} setValue={setCrn} isSecure />
                    <Input label='Senha' placeholder='Insira uma senha forte' value={password} setValue={setPassword} isSecure />
                    <Input label='Confirmar senha' placeholder='Repita sua senha' value={confirmPassword} setValue={setConfirmPassword} isSecure />

                    <Link backText='Já possui uma conta?' linkText='Entrar' link={() => navigation.navigate('LoginScreen')} />
                </InputList>

                <Button title='Criar conta' onPress={() => handleSignup(name, email, password, crn)} buttonStyle={{ background: MyStyleSheet.Color.BRAND, textColor: MyStyleSheet.Color.PRIMARY }} />
            </Form>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        ...MyStyleSheet.Container.BASE,
        paddingTop: 0,
    }
})