import { View, StyleSheet } from 'react-native'
import MyStyleSheet from './Styles'


/**
 * Container for `Input` or `SecureInput` inside a form
 * @returns A `container` JSX element that contains `Input` JSX elements
 */
export function InputList({ children }: { children: any }) {
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
export function Form({ children }: any) {
    return (
        <View style={styles.form}>
            {children}
        </View>
    )
}


/**
 * Generic modal component
 * @returns A modal JSX element
 */
export function ModalContainer({ children }: any) {
    return (
        <View style={styles.modal}>
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
    },
    modal: {
        backgroundColor: MyStyleSheet.Color.PRIMARY,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 50,
        marginHorizontal: 10,
        gap: 25,
    },
})