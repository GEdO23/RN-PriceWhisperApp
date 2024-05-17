import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Color } from './Styles';

export type LinkParam = {
    backText: string;
    linkText: string;
    link: any;
}


export default function Link({ backText, linkText, link }: LinkParam) {
    return (
        <View style={styles.container}>
            <Text>{backText}</Text>
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
    linkText: {
        color: Color.BRAND,
        fontWeight: '600'
    }
})