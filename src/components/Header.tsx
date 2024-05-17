import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Color } from './Styles'

export function AuthHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PriceWhisper</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.PRIMARY,
        paddingVertical: 80,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center'
    }
})