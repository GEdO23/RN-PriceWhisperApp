import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NotificationsScreenNavigationProps } from "~/navigation/props";


/**
 * The `NotificationScreen` which allows the user to see app notifications #27
 * 
 * @returns The `NotificationScreen`
 */
const NotificationScreen = () => {
    const navigation = useNavigation<NotificationsScreenNavigationProps>();

    return (
        <SafeAreaView>

        </SafeAreaView>
    )
}

export { NotificationScreen }