import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MyStyleSheet from './MyStyleSheet';

export type LinkParam = {
    backText: string;
    linkText: string;
    link: any;
}


export default function Link({ backText, linkText, link }: LinkParam) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{backText}</Text>
            <TouchableOpacity onPress={link}>
                <Text style={styles.linkText}>{linkText}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 5
    },
    text: {
        ...MyStyleSheet.Text.BASE,
        color: MyStyleSheet.Color.SECONDARY,
    },
    linkText: {
        ...MyStyleSheet.Text.LINK,
        color: MyStyleSheet.Color.BRAND,
        fontWeight: '600'
    }
})