import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { Alert, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FIREBASE_AUTH } from 'utils/firebase';
import { AccountScreenNavigationProps, InitialScreenNavigationProps } from '~/navigation/props';
import { Ionicons } from '@expo/vector-icons';
import { UserInfoLine, UserInfoTable } from './components/User';
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
    const initialNavigation = useNavigation<InitialScreenNavigationProps>();

    const auth = FIREBASE_AUTH;

    async function handleExit() {
        try {
            await signOut(auth);
            initialNavigation.navigate('InitialScreen');
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
            <Ionicons name='person-circle' color={lightColor} size={150} />
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

    const bg = {
        source: { uri: 'https://static.vecteezy.com/system/resources/previews/000/680/551/original/glowing-orange-tech-arrows-concept.jpg'}
    }

    /** 
     * TODO: Coletar e exibir dados do usuário 
     * TODO: EDIT USER #30 #31 #32
     * */
    return (
        <ScrollView fadingEdgeLength={200} style={styles.container}>
            {/* <SettingsIcon/> */}

            <ImageBackground source={bg.source} resizeMode='cover' style={styles.profileContainer}>
                <ProfilePicture />
                <Text style={styles.profileName}>OM Corp.</Text>
            </ImageBackground>

            <View style={styles.userContainer}>
                <Text style={{ fontWeight: '700', fontSize: 20, color: darkColor }}>Detalhes da conta</Text>

                <UserInfoLine icon='mail-outline' name='E-mail' value='omcorp.helpcenter@gmail.com' />
                <UserInfoLine icon='ribbon-outline' name='CNPJ' value='00.000.000/0000-00' />
                <UserInfoLine icon='key-outline' name='Senha' value='******' />

                <ExitAccountButton />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 20,
    },
    userContainer: {
        padding: 25,
        gap: 20,
    },
    profileContainer: {
        alignItems: 'center',
        padding: 100,
        justifyContent: 'center',
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