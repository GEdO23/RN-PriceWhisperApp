import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { lightColor } from './Styles'

export function AuthHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PriceWhisper</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: lightColor,
        paddingVertical: 80,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center'
    }
})