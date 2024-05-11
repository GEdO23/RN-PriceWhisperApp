import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DashboardScreenNavigationProps } from "~/navigation/props";


/**
 * The `DashboardScreen` which allows the user to see key indicators and metrics about the company `products` #44
 * 
 * The user may see:
 * - `totalRevenue` between a given date
 * - `salesAmount` of company products
 * 
 * @returns The `DashboardScreen`
 */
export function DashboardScreen() {
    const navigation = useNavigation<DashboardScreenNavigationProps>();

    return (
        <SafeAreaView>

        </SafeAreaView>
    )
}