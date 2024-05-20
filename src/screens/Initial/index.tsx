import React from 'react';

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProps } from '~/navigation/props';

/* COMPONENTS */
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Button from '~/components/Button';
import MyStyleSheet from '~/components/MyStyleSheet';


/**
 * The first screen the user will see #2 #3
 * 
 * The user may choose to *log in* or *sign up* a new account #4 #5
 * 
 * @returns The initial screen JSX element
 */
export default function InitialScreen() {
    const navigation = useNavigation<AppNavigationProps>();

    return (
        <SafeAreaView style={styles.container}>
            <View style={MyStyleSheet.Container.CENTER}>
                <Text style={MyStyleSheet.Text.TITLE}>PriceWhisper</Text>
            </View>

            <View style={styles.buttonList}>
                <Button
                    title='Entrar'
                    onPress={() => navigation.push('LoginScreen')}
                    buttonStyle={{ border: MyStyleSheet.Color.BRAND, textColor: MyStyleSheet.Color.BRAND }}
                />
                <Button
                    title='Criar conta'
                    onPress={() => navigation.push('SignupScreen')}
                    buttonStyle={{ background: MyStyleSheet.Color.BRAND, textColor: MyStyleSheet.Color.WHITE }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        ...MyStyleSheet.Container.BASE,
        gap: 20,
        paddingBottom: 50,
        justifyContent: 'space-between',
    },
    buttonList: {
        gap: 20
    }
});