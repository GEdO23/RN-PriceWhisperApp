import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootTabParamList } from "~/navigation";

type ConfiguracoesScreenNavigationProps = StackNavigationProp<RootTabParamList, 'Configuracoes'>;

export function Configuracoes() {
    const navigation = useNavigation<ConfiguracoesScreenNavigationProps>();

    return (
        <SafeAreaView>

        </SafeAreaView>
    )
}
