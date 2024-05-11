import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, RootTabParamList } from ".";


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
 * Tab navigation props for the `ProductsScreen`
 * @returns A type which has the `ProductsScreen` navigation props
 */
type ProductsScreenNavigationProps = StackNavigationProp<RootTabParamList, 'ProductsScreen'>;


/**
 * Tab navigation props for the `DashboardScreen`
 * @returns A type which has the `DashboardScreen` navigation props 
 * */
type DashboardScreenNavigationProps = StackNavigationProp<RootTabParamList, 'DashboardScreen'>;


/**
 * Tab navigation props for the `AccountScreen`
 * 
 * @returns A type which has the `AccountScreen` navigation props
 */
type AccountScreenNavigationProps = StackNavigationProp<RootTabParamList, 'AccountScreen'>;


/**
 * Tab navigation props for the `SettingsScreen`
 * @returns A type which has the `SettingsScreen` navigation props
 */
type SettingsScreenNavigationProps = StackNavigationProp<RootTabParamList, 'SettingsScreen'>;


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