import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootTabParamList } from "~/navigation";

type DashboardScreenNavigationProps = StackNavigationProp<RootTabParamList, 'Dashboard'>;

export function Dashboard() {
    const navigation = useNavigation<DashboardScreenNavigationProps>();

    return (
        <SafeAreaView>

        </SafeAreaView>
    )
}
