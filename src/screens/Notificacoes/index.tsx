import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootTabParamList } from "~/navigation";

type NotificacoesScreenNavigationProps = StackNavigationProp<RootTabParamList, 'Notificacoes'>;

export function Notificacoes() {
    const navigation = useNavigation<NotificacoesScreenNavigationProps>();

    return (
        <SafeAreaView>

        </SafeAreaView>
    )
}
