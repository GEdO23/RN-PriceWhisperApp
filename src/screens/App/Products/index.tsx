import React from "react";

/* NAVIGATION */
import { useNavigation } from "@react-navigation/native";
import { ProductListScreenNavigationProps } from "~/navigation/props";

/* COMPONENTS */
import { SafeAreaView } from "react-native";


/**
 * The product list screen, which allows the user to see current company products #12 #13
 * 
 * @todo 
 * TODO: Fill documentation about `ProductsScreen`
 * 
 * @returns The product list screen JSX element
 */
export default function ProductListScreen() {
    const navigation = useNavigation<ProductListScreenNavigationProps>();

    return (
        <SafeAreaView>

        </SafeAreaView>
    )
}