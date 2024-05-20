import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyStyleSheet from './MyStyleSheet'

export function AuthHeader() {
    return (
        <View style={styles.container}>
            <Text style={MyStyleSheet.Text.TITLE}>PriceWhisper</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 80,
        justifyContent: 'center',
    },
})