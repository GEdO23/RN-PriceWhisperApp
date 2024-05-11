import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";


/**
 * Parameter list of the screens in `Stack` navigation
 * @returns A type which has the `Stack` screens parameters
 */
export type RootStackParamList = {
    InitialScreen: undefined;
    SignupScreen: undefined;
    LoginScreen: undefined;
    App: undefined;
    NotificationsScreen: undefined;
};


/**
 * Parameter list of the screens in `BottomTab` navigation
 * @returns A type which has the `BottomTab` screens parameters
 */
export type RootBottomTabParamList = {
    SettingsScreen: undefined;
    ProductsScreen: undefined;
    ProductScreen: undefined;
    DashboardScreen: undefined;
    AccountScreen: undefined;
}


/**
 * Stack navigation props for the `InitialScreen`
 * @returns A type which has the `InitialScreen` navigation props
 */
export type InitialScreenNavigationProps = StackNavigationProp<RootStackParamList, 'InitialScreen'>;


/**
 * Stack navigation props for the `SignupScreen`
 * @returns A type which has the `SignupScreen` navigation props
 */
export type SignupScreenNavigationProps = StackNavigationProp<RootStackParamList, 'SignupScreen'>;


/**
 * Stack navigation props for the `LoginScreen`
 * @returns A type which has the `LoginScreen` navigation props
 */
export type LoginScreenNavigationProps = StackNavigationProp<RootStackParamList, 'LoginScreen'>;


/**
 * Stack navigation props for the `LoginScreen`
 * @returns A type which has the `LoginScreen` navigation props
 */
export type AppNavigationProps = StackNavigationProp<RootStackParamList, 'App'>;


/**
 * Bottom tab navigation props for the `ProductsScreen`
 * @returns A type which has the `ProductsScreen` navigation props
 */
export type ProductsScreenNavigationProps = BottomTabNavigationProp<RootBottomTabParamList, 'ProductsScreen'>;


/**
 * Bottom tab navigation props for the `DashboardScreen`
 * @returns A type which has the `DashboardScreen` navigation props 
 * */
export type DashboardScreenNavigationProps = BottomTabNavigationProp<RootBottomTabParamList, 'DashboardScreen'>;


/**
 * Bottom tab navigation props for the `AccountScreen`
 * @returns A type which has the `AccountScreen` navigation props
 */
export type AccountScreenNavigationProps = BottomTabNavigationProp<RootBottomTabParamList, 'AccountScreen'>;


/**
 * Bottom tab navigation props for the `SettingsScreen`
 * @returns A type which has the `SettingsScreen` navigation props
 */
export type SettingsScreenNavigationProps = BottomTabNavigationProp<RootBottomTabParamList, 'SettingsScreen'>;


/**
 * Stack navigation props for the `NotificationsScreen`
 * @returns A type which has the `NotificationsScreen` navigation props
 */
export type NotificationsScreenNavigationProps = StackNavigationProp<RootStackParamList, 'NotificationsScreen'>;
