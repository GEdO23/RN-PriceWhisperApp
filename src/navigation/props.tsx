import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, RootTabParamList } from ".";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";


/**
 * Stack navigation props for the `InitialScreen`
 * @returns A type which has the `InitialScreen` navigation props
 */
type InitialScreenNavigationProps = StackNavigationProp<RootStackParamList, 'InitialScreen'>;


/**
 * Stack navigation props for the `SignupScreen`
 * @returns A type which has the `SignupScreen` navigation props
 */
type SignupScreenNavigationProps = StackNavigationProp<RootStackParamList, 'SignupScreen'>;


/**
 * Stack navigation props for the `LoginScreen`
 * @returns A type which has the `LoginScreen` navigation props
 */
type LoginScreenNavigationProps = StackNavigationProp<RootStackParamList, 'LoginScreen'>;


/**
 * Bottom tab navigation props for the `ProductsScreen`
 * @returns A type which has the `ProductsScreen` navigation props
 */
type ProductsScreenNavigationProps = BottomTabNavigationProp<RootTabParamList, 'ProductsScreen'>;


/**
 * Bottom tab navigation props for the `DashboardScreen`
 * @returns A type which has the `DashboardScreen` navigation props 
 * */
type DashboardScreenNavigationProps = BottomTabNavigationProp<RootTabParamList, 'DashboardScreen'>;


/**
 * Bottom tab navigation props for the `AccountScreen`
 * @returns A type which has the `AccountScreen` navigation props
 */
type AccountScreenNavigationProps = BottomTabNavigationProp<RootTabParamList, 'AccountScreen'>;


/**
 * Bottom tab navigation props for the `SettingsScreen`
 * @returns A type which has the `SettingsScreen` navigation props
 */
type SettingsScreenNavigationProps = BottomTabNavigationProp<RootTabParamList, 'SettingsScreen'>;


/**
 * Stack navigation props for the `NotificationsScreen`
 * @returns A type which has the `NotificationsScreen` navigation props
 */
type NotificationsScreenNavigationProps = StackNavigationProp<RootStackParamList, 'NotificationsScreen'>;


export { 
    InitialScreenNavigationProps,
    SignupScreenNavigationProps,
    LoginScreenNavigationProps,
    ProductsScreenNavigationProps,
    DashboardScreenNavigationProps,
    AccountScreenNavigationProps,
    SettingsScreenNavigationProps,
    NotificationsScreenNavigationProps,
}