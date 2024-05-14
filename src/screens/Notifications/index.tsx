import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NotificationsScreenNavigationProps } from "~/navigation/props";


/**
 * The `NotificationScreen` which allows the user to see app notifications #27
 * 
 * @returns The `NotificationScreen`
 */
export default function NotificationScreen() {
    const navigation = useNavigation<NotificationsScreenNavigationProps>();

    return (
        <SafeAreaView>

        </SafeAreaView>
    )
}