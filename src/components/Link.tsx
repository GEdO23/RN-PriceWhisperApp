import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { brandColor } from './Styles';

export type LinkParam = {
    backText: string;
    linkText: string;
    link: any;
}


export function Link({ backText, linkText, link }: LinkParam) {
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
        color: brandColor,
        fontWeight: '600'
    }
})