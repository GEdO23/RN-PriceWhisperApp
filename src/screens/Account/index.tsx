import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AccountScreenNavigationProps } from "~/navigation/props";


/**
 * The `AccountScreen` which allows the user to edit it's account's information #25
 * 
 * The user may edit:
 * - `Name` and `ProfilePicture` without restriction #32
 * - `Email` by password #30
 * - `Password` and `CRN` by email #31
 * 
 * The user may also exit it's account without restriction #29
 * 
 * @returns The `AccountScreen`
 */
const AccountScreen = () => {
    const navigation = useNavigation<AccountScreenNavigationProps>();

    return (
        <SafeAreaView>

        </SafeAreaView>
    )
}

export { AccountScreen }