
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

export interface InputProps extends TextInputProps {
    label: string;
    placeholder: string;
    value: any;
    setValue: any;
    textBelow?: string | undefined;
}

function TextBelow({ text }: any) {
    if (text) {
        return (
            <TouchableOpacity>
                <Text style={styles.linkText}>{text}</Text>
            </TouchableOpacity>
        )
    }
    return null
}

export function Input({ label, value, setValue, placeholder, textBelow }: InputProps) {

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                spellCheck={false}
                value={value}
                onChangeText={(text) => setValue(text)}
                style={styles.input}
            />
            <TextBelow text={textBelow} />
        </View>
    )
}

export function SecureInput({ label, value, setValue, placeholder, textBelow }: InputProps) {
    const [showValue, setShowValue] = useState(false);

    function SecretIcon() {
        return showValue ?
            <Ionicons
                size={20}
                color="#000"
                name='eye'
                onPress={() => setShowValue(!showValue)}
            /> :
            <Ionicons
                size={20}
                color="#9D9D9D"
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
                />
                <SecretIcon />
            </View>
            <TextBelow text={textBelow} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: '#9D9D9D',
        borderBottomWidth: 1,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputContainer: {
        gap: 10,
    },
    label: {
        fontWeight: '600',
    },
    textInput: {
        flex: 1
    },
    linkText: {
        color: '#9D9D9D',
        fontWeight: '600'
    }
})