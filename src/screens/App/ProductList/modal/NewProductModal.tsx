import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NewProductModal() {
    return (
        <View style={styles.container}>
            <Text>AddProductModal</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, .5)',
        flex: 1,
    }
})