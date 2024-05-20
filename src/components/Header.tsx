import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyStyleSheet from './MyStyleSheet'

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
        ...MyStyleSheet.Container.CENTER,
        ...MyStyleSheet.Text.TITLE,
        color: MyStyleSheet.Color.SECONDARY,
    }
})