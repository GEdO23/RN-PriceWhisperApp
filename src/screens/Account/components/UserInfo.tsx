import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { darkColor } from "~/components/Styles";

type UserInfo = {
    icon: any;
    name: string;
    value: string;
}

export function UserInfoTable({ children }: any) {
    return (
        <View style={styles.infoListContainer}>
            {children}
        </View>
    )
}

export function UserInfoLine({ icon, name, value }: UserInfo) {
    return (
        <View style={styles.infoContainer}>
            <Ionicons name={icon} color={darkColor} size={25} />
            <View>
                <Text style={styles.infoName}>{name}</Text>
                <Text style={styles.infoValue}>{value}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        color: '#000',
        fontSize: 16,
    },
    infoListContainer: {
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        gap: 25,
        padding: 25,
    },
    infoContainer: {
        alignItems: 'center',
        borderColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 10,
        borderWidth: 2,
        flexDirection: 'row',
        padding: 20,
        height: 85,
        gap: 15,
    },
    infoName: {
        color: darkColor,
        fontSize: 16,
        fontWeight: '700',
    },
    infoValue: {
        color: 'rgba(0, 0, 0, .5)',
        fontSize: 16,
    }
})