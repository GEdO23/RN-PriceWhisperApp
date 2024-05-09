
import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

type SecureInput = {
    placeholder: string;
    value: any;
    setValue: any;
}


export function SecureInput({ placeholder, value, setValue }: SecureInput) {
    const [showValue, setShowValue] = useState(false);

    return (
        <View style={styles.input}>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={!showValue}
                spellCheck={false}
                value={value}
                onChangeText={(text) => setValue(text)}
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
})

export default SecureInput