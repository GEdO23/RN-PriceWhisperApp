import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductsScreenNavigationProps } from "~/navigation/props";


/**
 * The `ProductsScreen` which allows the user to see current company products #12 #13
 * 
 * @todo Fill documentation about `ProductsScreen`
 * 
 * @returns The `ProductsScreen`
 */
const ProductsScreen = () => {
    const navigation = useNavigation<ProductsScreenNavigationProps>();

    return (
        <SafeAreaView>

        </SafeAreaView>
    )
}

export { ProductsScreen }