import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import MyStyleSheet from './Styles'

export default function Loading() {
    return (
        <>
            <ActivityIndicator size={50} color={MyStyleSheet.Color.BRAND} />
            <Text>Carregando...</Text>
        </>
    )
}

const styles = StyleSheet.create({})