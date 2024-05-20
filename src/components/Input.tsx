
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import MyStyleSheet from './MyStyleSheet';

export type TextBelow = {
    text: string;
    onPress?: any;
}

export interface InputProps extends TextInputProps {
    label: string;
    placeholder: string;
    value: any;
    setValue: any;
}

export default function Input({ label, value, setValue, placeholder }: InputProps) {

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                spellCheck={false}
                value={value}
                onChangeText={(text) => setValue(text)}
                style={styles.input}
                placeholderTextColor={MyStyleSheet.Color.SECONDARY}
            />
        </View>
    )
}

export function SecureInput({ label, value, setValue, placeholder }: InputProps) {
    const [showValue, setShowValue] = useState(false);

    function SecretIcon() {
        return showValue ?
            <Ionicons
                size={20}
                color={MyStyleSheet.Color.SECONDARY}
                name='eye'
                onPress={() => setShowValue(!showValue)}
            /> :
            <Ionicons
                size={20}
                color={MyStyleSheet.Color.GRAY}
                name='eye-off'
                onPress={() => setShowValue(!showValue)}
            />
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <TextInput
                    placeholder={placeholder}
                    secureTextEntry={!showValue}
                    spellCheck={false}
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    style={styles.textInput}
                    placeholderTextColor={MyStyleSheet.Color.SECONDARY}
                />
                <SecretIcon />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: MyStyleSheet.Color.GRAY,
        borderBottomWidth: 1,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputContainer: {
        gap: 10,
    },
    label: {
        color: MyStyleSheet.Color.SECONDARY,
        fontWeight: '600',
    },
    textInput: {
        color: MyStyleSheet.Color.SECONDARY,
        flex: 1,
    }
})