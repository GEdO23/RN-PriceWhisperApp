import React from "react";

/* NAVIGATION */
import { useNavigation } from "@react-navigation/native";
import { NotificationsScreenNavigationProps } from "~/navigation/props";

/* COMPONENTS */
import { SafeAreaView } from "react-native";


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