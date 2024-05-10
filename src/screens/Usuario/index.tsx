import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootTabParamList } from "~/navigation";

type UsuarioScreenNavigationProps = StackNavigationProp<RootTabParamList, 'Usuario'>;

export function Usuario() {
    const navigation = useNavigation<UsuarioScreenNavigationProps>();

    return (
        <SafeAreaView>

        </SafeAreaView>
    )
}
