import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import MyStyleSheet from '~/components/MyStyleSheet';


export type ProductButtonsProps = {
    activeId: string;
    setActiveId: (value: string) => void;
}


export default function ProductButtonList({ activeId, setActiveId }: ProductButtonsProps) {

    const buttonSize = 25;

    const CreateButton = ({ id }: { id: string }) => {
        return (
            <Pressable style={id === activeId ? styles.active : styles.productButton} onPress={() => {
                setActiveId(id);
            }}>
                <Ionicons name='add-outline' size={buttonSize} color={id === activeId ? MyStyleSheet.Color.PRIMARY : MyStyleSheet.Color.SECONDARY} />
            </Pressable>
        )
    }

    const DatabaseButton = ({ id }: { id: string }) => {
        return (
            <Pressable style={id === activeId ? styles.active : styles.productButton} onPress={() => {
                setActiveId(id);
            }}>
                <Ionicons name='server-outline' size={buttonSize} color={id === activeId ? MyStyleSheet.Color.PRIMARY : MyStyleSheet.Color.SECONDARY} />
            </Pressable>
        )
    }

    const DashboardButton = ({ id }: { id: string }) => {
        return (
            <Pressable style={id === activeId ? styles.active : styles.productButton} onPress={() => {
                setActiveId(id);
            }}>
                <Ionicons name='podium-outline' size={buttonSize} color={id === activeId ? MyStyleSheet.Color.PRIMARY : MyStyleSheet.Color.SECONDARY} />
            </Pressable>
        )
    }

    const ProductsButton = ({ id }: { id: string }) => {
        return (
            <Pressable style={id === activeId ? styles.active : styles.productButton} onPress={() => {
                setActiveId(id);
            }}>
                <Ionicons name='pricetags-outline' size={buttonSize} color={id === activeId ? MyStyleSheet.Color.PRIMARY : MyStyleSheet.Color.SECONDARY} />
            </Pressable>
        )
    }

    return (
        <>
            <View style={styles.buttonsContainer}>
                <CreateButton id='4' />
                <DatabaseButton id='3' />
                <DashboardButton id='2' />
                <ProductsButton id='1' />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    productButton: {
        alignItems: 'center',
        aspectRatio: 1,
        backgroundColor: MyStyleSheet.Color.PRIMARY,
        borderColor: MyStyleSheet.Color.SECONDARY,
        borderRadius: 200,
        borderWidth: 1,
        elevation: 2,
        justifyContent: 'center',
        padding: 10,
    },
    active: {
        alignItems: 'center',
        aspectRatio: 1,
        backgroundColor: MyStyleSheet.Color.BRAND,
        borderRadius: 200,
        elevation: 2,
        justifyContent: 'center',
        padding: 10,
    },
    buttonsContainer: {
        position: 'absolute',
        right: 20,
        bottom: 40,
        gap: 10,
    },
})