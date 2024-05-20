import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ProductProps } from "~/screens/App/ProductList/Product/components/Product";


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
    DashboardScreen: undefined;
    AccountScreen: undefined;
}


/**
 * Parameter list of the product screens in `Stack` navigation
 * @returns A type which has the `Stack` product screens parameters
 */
export type ProductStackParamList = {
    ProductListScreen: undefined;
    ProductScreen: { id: string };
}


/**
 * Stack navigation props for the `App`
 * @returns A type which has the `App` navigation props
 */
export type AppNavigationProps = StackNavigationProp<RootStackParamList, 'App'>;


/**
 * Bottom tab navigation props for the `ProductsScreen`
 * @returns A type which has the `ProductsScreen` navigation props
 */
export type ProductsScreenNavigationProps = StackNavigationProp<ProductStackParamList, 'ProductListScreen'>;


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