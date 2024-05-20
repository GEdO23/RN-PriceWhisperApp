import React, { useEffect, useState } from 'react'

/* NAVIGATION */
import { ProductStackParamList } from '~/navigation/props'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

/* COMPONENTES */
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Loading from '~/components/Loading'
import Product from './components/Product'

/* FIREBASE */
import { doc, getDoc } from 'firebase/firestore'
import { firestore } from 'utils/firebase'
import MyStyleSheet from '~/components/MyStyleSheet'


type Props = NativeStackScreenProps<ProductStackParamList, 'ProductScreen'>;

export type ProductProps = {
    id: string;
    name: string;
    price: number;
    desc: string;
    code?: string;
    stock?: number;
    urlImage?: string;
}


const ProductDetailScreen: React.FC<Props> = ({ route }) => {
    const { id } = route.params;

    const [product, setProduct] = useState<ProductProps | null>(null);

    useEffect(() => {
        const fetchProduto = async () => {
            const productRef = doc(firestore, `products`, id);
            const productSnap = await getDoc(productRef);

            if (productSnap.exists()) setProduct(productSnap.data() as ProductProps);
            else console.log('Oxe, não achei nada de produto');
        };

        fetchProduto()
    }, [id]);

    if (!product) return (
        <SafeAreaView style={styles.loadingContainer}>
            <Loading />
        </SafeAreaView>
    )

    return (
        <SafeAreaView style={MyStyleSheet.Container.BASE}>
            <View style={styles.container}>
                <Text style={MyStyleSheet.Text.TITLE}>{product.name}</Text>
                <Text style={MyStyleSheet.Text.SUBTITLE}>R$ {product.price.toFixed(2)}</Text>
                
                <View style={styles.textContainer}>
                    <Text style={MyStyleSheet.Text.STRONG}>Código:</Text>
                    <Text style={MyStyleSheet.Text.BASE}>{product.code}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={MyStyleSheet.Text.STRONG}>Descrição:</Text>
                    <Text style={MyStyleSheet.Text.BASE}>{product.desc}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={MyStyleSheet.Text.STRONG}>Estoque:</Text>
                    <Text style={MyStyleSheet.Text.BASE}>{product.stock}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetailScreen;

const styles = StyleSheet.create({
    container: {
        gap: 10,
    },
    textContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})