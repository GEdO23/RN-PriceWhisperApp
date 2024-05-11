import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingsScreenNavigationProps } from "~/navigation/props";


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
export function SettingsScreen() {
    const navigation = useNavigation<SettingsScreenNavigationProps>();

    return (
        <SafeAreaView>

        </SafeAreaView>
    )
}