import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { User, signOut } from 'firebase/auth';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FIREBASE_AUTH } from 'utils/firebase';
import { Button } from '~/components/Button';
import { AccountScreenNavigationProps, AppNavigationProps } from '~/navigation/props';
import { Ionicons } from '@expo/vector-icons';
import { AppNavigation } from '~/navigation';
import { UserInfoLine, UserInfoTable } from './components/UserInfo';


type UserInfo = {
    nome: string,
    email: string,
    cnpj: string,
    senha: string,
};

/**
 * The `AccountScreen` which allows the user to edit it's account's information #25
 * 
 * The user may edit:
 * - `Name` and `ProfilePicture` without restriction #32
 * - `Email` by password #30
 * - `Password` and `CRN` by email #31
 * 
 * The user may also exit it's account without restriction #29
 * 
 * @returns The `AccountScreen`
 */
export function AccountScreen() {
    const navigation = useNavigation<AccountScreenNavigationProps>();

    const auth = FIREBASE_AUTH;

    async function handleExit() {
        try {
            await signOut(auth);
            AppNavigation.push('InitialScreen')
        } catch (error) {
            Alert.alert(
                'Erro inesperado',
                'Um erro inesperado ocorreu ao tentar sair de sua conta.\nTente novamente mais tarde, ou entre em contato com omcorp.helpcenter@gmail.com.',
                [{ text: 'Ok' }]
            )
            throw new Error('Um erro inesperado ocorreu ao tentar sair de sua conta.')
        }
    }

    function SettingsIcon() {
        return (
            <Ionicons
                color='#4d4d4d'
                name='cog-outline'
                onPress={() => navigation.navigate('SettingsScreen')}
                size={10}
                style={styles.settingsIcon}
            />
        )
    }

    function ProfilePicture() {
        return (
            <View style={styles.profileContainer}>
                <Ionicons name='person-circle' color='#4d4d4d' size={50} />
            </View>
        )
    }

    function ExitAccountButton() {
        return (
            <Button
                title="Sair da conta"
                onPress={() => handleExit()}
                buttonStyle={{
                    background: '#EF4023',
                    textColor: '#FFFFFF'
                }}
            />
        )
    }

    /** 
     * TODO: Coletar e exibir dados do usuário 
     * TODO: EDIT USER
     * */
    return (
        <SafeAreaView style={styles.container}>
            <SettingsIcon />
            <ProfilePicture />

            <UserInfoTable>
                <UserInfoLine name={'Nome'} value={'Nome'} />
                <UserInfoLine name={'Email'} value={'Email'} />
                <UserInfoLine name={'CNPJ'} value={'CNPJ'} />
                <UserInfoLine name={'Senha'} value={'Senha'} />
            </UserInfoTable>

            <ExitAccountButton />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        gap: 20,
        margin: 20,
    },
    profileContainer: {
        alignItems: 'center',
        backgroundColor: '#9D9D9D',
        borderRadius: 100,
        justifyContent: 'center',
        padding: 20,
    },
    settingsIcon: {
        position: 'absolute',
        right: 20,
        top: 20,
    }
})