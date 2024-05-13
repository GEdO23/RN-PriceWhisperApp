import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

// Componentes
import { Button } from '~/components/Button';

// Navigation
import { InitialScreenNavigationProps } from '~/navigation/props';


/**
 * The startup screen, the first screen the user will see #2 #3
 * 
 * The user may choose to *log in* or *sign up* a new account #4 #5
 * 
 * @returns The `InitialScreen`
 */
export function InitialScreen() {
    const navigation = useNavigation<InitialScreenNavigationProps>();

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
        backgroundColor: '#FFFFFF'
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