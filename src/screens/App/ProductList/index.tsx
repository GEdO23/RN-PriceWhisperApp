import React, { useEffect, useState } from "react";

/* COMPONENTS */
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import Loading from "~/components/Loading";
import ProductItem from "./components/ProductItem";
import { ProductProps } from "./Product/components/Product";
import ProductButtonList from "./components/ProductButtonList";

/* FIREBASE */
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "utils/firebase";


export default function ProductListScreen() {
    const [products, setProducts] = useState<ProductProps[] | null>(null);
    const [activeButtonId, setActiveButtonId] = useState('1');

    useEffect(() => {
        const fetchProducts = async () => {
            const productsCollection = collection(firestore, 'products');
            const productsSnapshot = await getDocs(productsCollection);
            const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as ProductProps[];
            setProducts(productsList);

        };

        fetchProducts();
    }, [])

    if (!products) return (
        <SafeAreaView style={styles.loadingContainer}>
            <Loading />
        </SafeAreaView>
    )


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProductItem id={item.id} name={item.name} desc={item.desc} price={item.price} urlImage="https://static.itdg.com.br/images/360-240/8d5ffb7df41dfd990ce1a20b1c45c36f/shutterstock-184374716-1-.jpg" />
                )}
            />
            <ProductButtonList activeId={activeButtonId} setActiveId={setActiveButtonId} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})