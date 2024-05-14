import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { DocumentData, collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FIREBASE_AUTH, FIREBASE_DATABASE } from "utils/firebase";
import { Button } from "~/components/Button";
import { AppNavigationProps } from "~/navigation/props";


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
    const navigation = useNavigation<AppNavigationProps>();

    const auth = FIREBASE_AUTH;

    async function handleExit() {
        try {
            await signOut(auth);
            navigation.push('InitialScreen')
        } catch (error) {
            Alert.alert(
                'Erro inesperado',
                'Um erro inesperado ocorreu ao tentar sair de sua conta.\nTente novamente mais tarde, ou entre em contato com omcorp.helpcenter@gmail.com.',
                [{ text: 'Ok' }]
            )
            throw new Error('Um erro inesperado ocorreu ao tentar sair de sua conta.')
        }
    }

    return (
        <SafeAreaView>
            <Button
                title="Sair da conta"
                onPress={() => handleExit()}
                buttonStyle={{
                    background: '#EF4023',
                    textColor: '#FFFFFF'
                }}
            />
        </SafeAreaView>
    )
}