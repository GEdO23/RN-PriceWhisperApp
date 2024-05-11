import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import * as NavProp from '~/navigation/props';

export type LinkParam = {
    link?: {
        firstText: string;
        linkText: string;
        navigate: any;
    }
}


export function Link({ link }: LinkParam) {
    return (
        <View style={styles.container}>
            {
                link ? (
                    <>
                        <Text>{link.firstText}</Text>
                        <TouchableOpacity onPress={link.navigate}>
                            <Text style={styles.linkText}>{link.linkText}</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <Text>Link not found</Text>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 5
    },
    linkText: {
        color: '#00F',
        fontWeight: '600'
    }
})