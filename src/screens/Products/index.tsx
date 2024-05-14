import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductsScreenNavigationProps } from "~/navigation/props";
import { ProductsList, ProductsItem } from "./components/ProductsList";


/**
 * The `ProductsScreen` which allows the user to see current company products #12 #13
 * 
 * @todo Fill documentation about `ProductsScreen`
 * 
 * @returns The `ProductsScreen`
 */
export default function ProductsScreen() {
    const navigation = useNavigation<ProductsScreenNavigationProps>();

    const productListData = [
        { "id": "1", "name": "Arroz", "price": 25 },
        { "id": "2", "name": "Farofa", "price": 10 },
        { "id": "3", "name": "Batata palha", "price": 8 },
        { "id": "4", "name": "Ketchup", "price": 5 },
        { "id": "5", "name": "Mostarda", "price": 5 },
        { "id": "6", "name": "Maionese", "price": 8 },
        { "id": "7", "name": "Feijão", "price": 20 },
        { "id": "8", "name": "Leite 2L", "price": 8 },
        { "id": "9", "name": "Leite 5L", "price": 15 },
    ]

    return (
        <SafeAreaView>
            <ProductsList>
                {productListData.map((item) => (
                    <ProductsItem idCode={item.id} name={item.name} price={item.price} />
                ))}
            </ProductsList>
        </SafeAreaView>
    )
}