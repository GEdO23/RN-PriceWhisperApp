import React from 'react';

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProps } from '~/navigation/props';

/* COMPONENTS */
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Button from '~/components/Button';
import { lightColor } from '~/components/Styles';


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
            <View style={styles.titleContainer}>
                <Text style={styles.title}>PriceWhisper</Text>
            </View>

            <View style={styles.buttonList}>
                <Button
                    title='Entrar'
                    onPress={() => navigation.push('LoginScreen')}
                    buttonStyle={{
                        background: 'transparent',
                        border: '#EF4023',
                        textColor: '#EF4023'
                    }}
                />

                <Button
                    title='Criar conta'
                    onPress={() => navigation.push('SignupScreen')}
                    buttonStyle={{
                        background: '#EF4023',
                        border: 'transparent',
                        textColor: '#FFFFFF'
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        paddingHorizontal: 20,
        paddingVertical: 100,
        justifyContent: 'space-between',
        backgroundColor: lightColor
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center'
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonList: {
        gap: 20
    }
});