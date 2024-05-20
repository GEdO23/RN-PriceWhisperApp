import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyStyleSheet from './Styles'

export function AuthHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PriceWhisper</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: MyStyleSheet.Color.PRIMARY,
        paddingVertical: 80,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center'
    }
})