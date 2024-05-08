import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "~/components/Button";
import { RootStackParamList } from "~/navigation";

type ProdutosScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Produtos'>;

export function Produtos() {
    const navigation = useNavigation<ProdutosScreenNavigationProps>();

    return (
        <SafeAreaView>
            <Button
            title="Voltar"
            onPress={() => navigation.push('Inicio')}
            />
        </SafeAreaView>
    )
}
