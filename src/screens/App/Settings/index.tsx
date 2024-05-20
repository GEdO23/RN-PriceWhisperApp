import React from "react";

/* NAVIGATION */
import { useNavigation } from "@react-navigation/native";
import { SettingsScreenNavigationProps } from "~/navigation/props";

/* COMPONENTS */
import { SafeAreaView } from "react-native";


/**
 * The settings screen, which will allow the user to change enabled app configurations #26
 * 
 * Current enabled configurations are:
 * - appearance #33
 * - notifications #34
 * - delete account #35
 * 
 * @returns The `SettingsScreen`
 */
export default function SettingsScreen() {
    const navigation = useNavigation<SettingsScreenNavigationProps>();

    return (
        <SafeAreaView>

        </SafeAreaView>
    )
}