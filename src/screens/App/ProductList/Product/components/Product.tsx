import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProductProps } from '..'


export default function Product({ data }: { data: ProductProps }) {
    return (
        <View style={styles.container}>
            <Text>{data.name}</Text>
            <Text>{data.price}</Text>
            <Text>{data.code}</Text>
            <Text>{data.desc}</Text>
            <Text>{data.stock}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 20,
    }
})