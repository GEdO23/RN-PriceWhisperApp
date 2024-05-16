import React, { useContext } from 'react'

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProps } from '~/navigation/props';

/* COMPONENTS */
import { SafeAreaView, StyleSheet } from 'react-native'
import Form, { InputList } from '~/components/Form';
import { Link } from '~/components/Link';
import { lightColor } from '~/components/Styles';

/* CONTEXT */
import { UserContext } from '~/provider/UserProvider';
import Button from '~/components/Button';
import { Input, SecureInput } from '~/components/Input';


/**
 * The login screen which allows the user to log in #5
 * @returns The login screen JSX element
 */
export default function LoginScreen() {
    const navigation = useNavigation<AppNavigationProps>();

    const { email, setEmail, password, setPassword, handleLogin, handleForgotPassword } = useContext(UserContext)

    return (
        <SafeAreaView style={styles.container} >
            <Form>
                <InputList>
                    <Input label='Email' placeholder='example@domain.com' value={email} setValue={setEmail} />
                    <SecureInput label='Senha' placeholder='Insira uma senha forte' value={password} setValue={setPassword} textBelow={{
                        text: 'Esqueceu sua senha?', onPress: () => handleForgotPassword(email)
                    }} />

                    <Link backText='Não possui uma conta ainda?' linkText='Cadastre-se' link={() => navigation.navigate('SignupScreen')} />
                </InputList>

                <Button title='Entrar' onPress={() => handleLogin(email, password)} buttonStyle={{ background: '#EF4023', textColor: '#FFFFFF' }} />
            </Form>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: lightColor,
        flex: 1,
        paddingBottom: 60,
        paddingHorizontal: 20,
    }
})