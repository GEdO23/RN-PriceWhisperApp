
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

interface InputProps extends TextInputProps {
    label: string;
    placeholder: string;
    value: any;
    setValue: any;
}

function Input({ label, value, setValue, placeholder }: InputProps) {
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
        </View>
    )
}

function SecureInput({ label, value, setValue, placeholder }: InputProps) {
    const [showValue, setShowValue] = useState(false);

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
                {
                    showValue ?
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
            </View>
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
    }
})

export { Input, SecureInput }