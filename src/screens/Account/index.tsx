import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "~/components/Button";
import { AppNavigationProps } from "~/navigation/props";


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
export function AccountScreen() {
    const navigation = useNavigation<AppNavigationProps>();

    useEffect(() => {
        // Collect user data
        async function fetchUserData() {
            
        }


    })

    return (
        <SafeAreaView>
            <Button
                title="Sair da conta"
                onPress={() => navigation.navigate('InitialScreen')}
            />
        </SafeAreaView>
    )
}