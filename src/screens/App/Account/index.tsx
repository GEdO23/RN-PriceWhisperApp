import React, { useContext, useEffect } from 'react'

/* COMPONENTS */
import { Ionicons } from '@expo/vector-icons';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { darkColor, lightColor } from '~/components/Styles';
import { UserInfoLine } from './components/User';

/* CONTEXT */
import { UserContext } from '~/provider/UserProvider';


/**
 * The account screen which allows the user to edit it's account's information #25
 * 
 * The user may edit:
 * - `Name` and `ProfilePicture` without restriction #32
 * - `Email` by password #30
 * - `Password` and `CRN` by email #31
 * 
 * The user may also exit it's account without restriction #29
 * 
 * @returns The account screen JSX element
 */
export default function AccountScreen() {
    const { name, email, password, crn, handleDataCollection, handleLogout } = useContext(UserContext);

    /** Variable that contains the background image source for the profile display */
    const bg = { uri: 'https://static.vecteezy.com/system/resources/previews/000/680/551/original/glowing-orange-tech-arrows-concept.jpg' };

    useEffect(() => handleDataCollection(), [name, email, password, crn])

    /** 
     * TODO: Edit #30 #31 #32 
     * */
    return (
        <ScrollView fadingEdgeLength={200} style={styles.container}>
            <ImageBackground source={bg} resizeMode='cover' style={styles.profileContainer}>
                <Ionicons name='person-circle' color={lightColor} size={150} />
                <Text style={styles.profileName}>{name}</Text>
            </ImageBackground>

            <View style={styles.userContainer}>
                <Text style={{ fontWeight: '700', fontSize: 20, color: darkColor }}>Detalhes da conta</Text>

                <UserInfoLine icon='mail-outline' name='E-mail' value={email} />
                <UserInfoLine icon='ribbon-outline' name='CNPJ' value={crn} />
                <UserInfoLine icon='key-outline' name='Senha' value={password} />

                <TouchableOpacity onPress={() => handleLogout()} style={styles.exitButton}>
                    <Ionicons name='exit-outline' color={'#f00'} size={25} />
                    <Text style={styles.exitButtonText}>Sair da conta</Text>
                </TouchableOpacity>
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