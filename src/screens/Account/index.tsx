import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { User, signOut } from 'firebase/auth';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FIREBASE_AUTH } from 'utils/firebase';
import { AccountScreenNavigationProps } from '~/navigation/props';
import { Ionicons } from '@expo/vector-icons';
// import { AppNavigation } from '~/navigation';
import { UserInfoLine, UserInfoTable } from './components/UserInfo';
import { brandColor, darkColor, lightColor } from '~/components/Styles';


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
            <Ionicons name='person-circle' color={lightColor} size={100} />
        )
    }

    function ExitAccountButton() {
        return (
            <TouchableOpacity onPress={() => handleExit()} style={styles.exitButton}>
                <Ionicons name='exit-outline' color={'#f00'} size={25} />
                <Text style={styles.exitButtonText}>Sair da conta</Text>
            </TouchableOpacity>
        )
    }

    /** 
     * TODO: Coletar e exibir dados do usuário 
     * TODO: EDIT USER #30 #31 #32
     * */
    return (
        <View style={styles.container}>
            {/* <SettingsIcon/> */}

            <View style={styles.profileContainer}>
                <ProfilePicture />
                <Text style={styles.profileName}>OM Corp.</Text>
            </View>

            <View style={styles.userContainer}>
                <Text style={{ fontWeight: '700', fontSize: 20, color: darkColor }}>Detalhes da conta</Text>

                <UserInfoLine icon='mail-outline' name='E-mail' value='omcorp.helpcenter@gmail.com'/>
                <UserInfoLine icon='ribbon-outline' name='CNPJ' value='00.000.000/0000-00'/>
                <UserInfoLine icon='key-outline' name='Senha' value='******'/>

                <ExitAccountButton />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
    },
    userContainer: {
        paddingHorizontal: 25,
        gap: 20,
    },
    profileContainer: {
        alignItems: 'center',
        backgroundColor: brandColor,
        paddingTop: 75,
        paddingBottom: 50,
    },
    profileName: {
        fontSize: 20,
        color: lightColor,
        fontWeight: '600'
    },
    userInfoContainer: {
        flexDirection: 'row',
        padding: 20,
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 10,
        gap: 15,
        alignItems: 'center'
    },
    exitButton: {
        alignItems: 'center',
        borderColor: 'rgba(255, 0, 0, .2)',
        borderRadius: 10,
        borderWidth: 2,
        flexDirection: 'row',
        padding: 20,
        height: 85,
        gap: 15,
    },
    exitButtonText: {
        color: '#f00',
        fontSize: 16,
        fontWeight: '700',
    }
})