import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

// Componentes
import { Button } from '~/components/Button';

// Navigation
import { RootStackParamList } from '~/navigation'

type InicioScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Inicio'>;

export function Inicio() {
    const navigation = useNavigation<InicioScreenNavigationProps>();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>PriceWhisper</Text>
            </View>

            <View style={styles.buttonList}>
                <Button
                    title='Entrar'
                    onPress={() => navigation.push('Login')}
                />

                <Button
                    title='Criar conta'
                    onPress={() => navigation.push('Cadastro')}
                />
            </View>
        </SafeAreaView>
    )
}

export const styles = StyleSheet.create({
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
