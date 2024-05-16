import { View, StyleSheet } from 'react-native'


/**
 * Container for `Input` or `SecureInput` inside a form
 * @returns A `container` JSX element that contains `Input` JSX elements
 */
export function InputList({children}: {children: any}) {
    return (
        <View style={styles.inputList}>
            {children}
        </View>
    )
}


/**
 * Generic form component
 * @returns A form JSX element
 */
export default function Form({ children }: any) {
    return (
        <View style={styles.form}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
    },
    inputList: {
        gap: 20,
        marginBottom: 50,
    }
})