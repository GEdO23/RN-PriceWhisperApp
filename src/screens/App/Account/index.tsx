import React, { useContext, useEffect } from 'react'

/* COMPONENTS */
import { ScrollView, StyleSheet } from 'react-native';
import { UserDisplayProfile, UserInfo, UserInfoLine } from './components/User';

/* CONTEXT */
import { UserContext } from '~/provider/UserProvider';
import { ExitButton } from '~/components/Button';


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

    useEffect(() => {
        handleDataCollection(), [name, email, password, crn]
    })

    // TODO: Edit #30 #31 #32 
    return (
        <ScrollView fadingEdgeLength={1} style={styles.container}>

            <UserDisplayProfile name={name} />

            <UserInfo title='Detalhes da conta'>
                <UserInfoLine icon='mail-outline' name='E-mail' value={email} />
                <UserInfoLine icon='ribbon-outline' name='CNPJ' value={crn} />
                <UserInfoLine icon='key-outline' name='Senha' value={password} />

                <ExitButton handleExit={() => handleLogout()} text='Sair da conta' />
            </UserInfo>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 20,
    }
})