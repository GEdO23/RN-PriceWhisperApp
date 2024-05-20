import React, { useEffect, useState } from 'react'

/* NAVIGATION */
import { ProductStackParamList } from '~/navigation/props'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

/* COMPONENTES */
import { SafeAreaView, StyleSheet } from 'react-native'
import Loading from '~/components/Loading'
import Product from './components/Product'

/* FIREBASE */
import { doc, getDoc } from 'firebase/firestore'
import { firestore } from 'utils/firebase'


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
        <SafeAreaView>
            <Product data={product} />
        </SafeAreaView>
    )
}

export default ProductDetailScreen;

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})