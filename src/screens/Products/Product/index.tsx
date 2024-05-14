import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ProductScreenNavigationProps } from '~/navigation/props'

export default function ProductScreen() {
    const navigate = useNavigation<ProductScreenNavigationProps>()

    return (
        <View>
            <Text>index</Text>
        </View>
    )
}

const styles = StyleSheet.create({})