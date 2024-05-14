import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export type ProductProps = {
    idCode: string;
    name: string;
    description?: string;
    price: number;
    inStock?: number;
}

export function ProductsList({ children }: { children: any }) {
    return (
        <View style={styles.list}>
            {children}
        </View>
    )
}

export function ProductsItem({ name, price }: ProductProps) {
    return (
        <View style={styles.item}>
            <Text style={[styles.itemText, styles.itemSpecial]}>{name}</Text>
            <Text style={styles.itemText}>R$ {price.toFixed(2).replace('.', ',')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {

    },
    itemSpecial: {

    },
    itemText: {

    },
    list: {

    }
})