import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { User, signOut } from 'firebase/auth';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FIREBASE_AUTH } from 'utils/firebase';
import { Button } from '~/components/Button';
import { AccountScreenNavigationProps } from '~/navigation/props';
import { Ionicons } from '@expo/vector-icons';
// import { AppNavigation } from '~/navigation';
import { UserInfoLine, UserInfoTable } from './components/UserInfo';
import { darkColor } from '~/components/Styles';


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
export default function AccountScreen() {
    const navigation = useNavigation<AccountScreenNavigationProps>();

    const auth = FIREBASE_AUTH;

    async function handleExit() {
        try {
            await signOut(auth);
            // AppNavigation.push('InitialScreen')
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
                color={darkColor}
                name='settings-outline'
                onPress={() => navigation.navigate('SettingsScreen')}
                size={30}
            />
        )
    }

    function ProfilePicture() {
        return (
            <View style={styles.profileContainer}>
                <Ionicons name='person-circle' color={darkColor} size={100} />
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
     * TODO: EDIT USER #30 #31 #32
     * */
    return (
        <SafeAreaView style={styles.container}>

            <SettingsIcon/>
            <ExitAccountButton />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        margin: 20,
    },
    profileContainer: {
        alignItems:  'center'
    }
})