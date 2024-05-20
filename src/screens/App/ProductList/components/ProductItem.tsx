import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ProductsScreenNavigationProps } from '~/navigation/props'
import MyStyleSheet from '~/components/MyStyleSheet'
import { ProductProps } from '../Product'


export type ProductItemProps = {
    size: 'sm' | 'md' | 'lg';
} & ProductProps

export default function ProductItem({ name, price, desc, urlImage, id, size }: ProductItemProps) {
    const navigation = useNavigation<ProductsScreenNavigationProps>();

    const chosenStyle = size === 'md' ? MediumSizeStyles : size === 'lg' ? LargeSizeStyles : SmallSizeStyles;

    return (
        <Pressable style={chosenStyle.container} onPress={() => navigation.push('ProductScreen', { id: id })}>
            <Image style={chosenStyle.itemImage} source={{ uri: urlImage }} />
            <View style={chosenStyle.itemTextContainer}>
                <Text style={[chosenStyle.text, chosenStyle.itemName]}>{name}</Text>
                <Text style={[chosenStyle.text, chosenStyle.itemDescription]}>{desc}</Text>
                <Text style={[chosenStyle.text, chosenStyle.itemPrice]}>R$ {price.toFixed(2).replace('.', ',')}</Text>
            </View>
        </Pressable>
    )

}

const SmallSizeStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: MyStyleSheet.Color.PRIMARY,
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
        backgroundColor: MyStyleSheet.Color.GRAY,
        borderRadius: 10,
        display: 'none',
        width: 40,
    },
})

const MediumSizeStyles = StyleSheet.create({
    ...SmallSizeStyles,
    container: {
        ...SmallSizeStyles.container,
    },
    text: {
        ...SmallSizeStyles.text,
        fontSize: 20,
    },
    itemImage: {
        ...SmallSizeStyles.itemImage,
        display: 'flex',
    },
    itemTextContainer: {
        ...SmallSizeStyles.itemTextContainer,
        flexDirection: 'column',
    },
    itemPrice: {
        ...SmallSizeStyles.itemPrice,
        position: 'static',
        left: 205,
    }
})

const LargeSizeStyles = StyleSheet.create({
    ...MediumSizeStyles,
    container: {
        ...MediumSizeStyles.container,
    },
})