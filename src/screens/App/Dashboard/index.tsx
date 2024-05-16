import React from "react";

/* NAVIGATION */
import { useNavigation } from "@react-navigation/native";
import { DashboardScreenNavigationProps } from "~/navigation/props";

/* COMPONENTS */
import { SafeAreaView } from "react-native";


/**
 * The `DashboardScreen` which allows the user to see key indicators and metrics about the company `products` #44
 * 
 * The user may see:
 * - `totalRevenue` between a given date
 * - `salesAmount` of company products
 * 
 * @returns The `DashboardScreen`
 */
export default function DashboardScreen() {
    const navigation = useNavigation<DashboardScreenNavigationProps>();

    return (
        <SafeAreaView>

        </SafeAreaView>
    )
}