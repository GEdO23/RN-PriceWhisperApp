import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export function AuthHeader() {
    return (
        <View>
            <Text style={styles.title}>PriceWhisper</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: 80,
    }
})