import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ProductsScreenNavigationProps } from '~/navigation/props'
import { Color } from '~/components/Styles'


export type ProductItemProps = {
    id: string;
    name: string;
    urlImage?: string;
    price: number;
    desc: string;
}

export default function ProductItem({ name, price, desc, urlImage, id }: ProductItemProps) {
    const navigation = useNavigation<ProductsScreenNavigationProps>();

    return (
        <Pressable style={styles.container} onPress={() => navigation.push('ProductScreen', { id: id })}>
            <Image style={styles.itemImage} source={{ uri: urlImage }} />
            <View style={styles.itemTextContainer}>
                <Text style={[styles.text, styles.itemName]}>{name}</Text>
                <Text style={[styles.text, styles.itemDescription]}>{desc}</Text>
                <Text style={[styles.text, styles.itemPrice]}>R$ {price.toFixed(2).replace('.', ',')}</Text>
            </View>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: Color.PRIMARY,
        borderRadius: 10,
        elevation: 5,
        flexDirection: 'row',
        gap: 20,
        margin: 20,
        padding: 20,
    },
    text: {

    },
    itemName: {

    },
    itemDescription: {

    },
    itemPrice: {

    },
    itemTextContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemImage: {
        aspectRatio: 1,
        backgroundColor: '#CCC',
        borderRadius: 10,
        display: 'none',
        width: 40,
    },
})