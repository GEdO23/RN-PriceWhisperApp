
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
    isSecure?: boolean;
}

export default function Input({ label = 'Label', value, setValue, placeholder = 'placeholder', isSecure = false }: InputProps) {
    const [showValue, setShowValue] = useState(isSecure);

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
            <Text style={MyStyleSheet.Text.LABEL}>{label}</Text>
            <View style={MyStyleSheet.Container.INPUT}>
                <TextInput
                    spellCheck={false}
                    placeholder={placeholder}
                    placeholderTextColor={MyStyleSheet.Color.GRAY}
                    style={MyStyleSheet.Text.INPUT}
                    secureTextEntry={showValue}
                    value={value}
                    onChangeText={(text) => setValue(text)}
                />
                {isSecure ? <SecretIcon /> : <></>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        gap: 10,
    }
})