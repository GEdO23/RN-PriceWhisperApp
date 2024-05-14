import { StyleSheet, Text, View } from "react-native";

type UserInfo = {
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

export function UserInfoLine({ name, value }: UserInfo) {
    return (
        <View style={styles.infoContainer}>
            <Text style={styles.info}>{name}:</Text>
            <Text style={styles.info}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        color: '#4d4d4d',
        fontSize: 16,
    },
    infoContainer: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoListContainer: {
        backgroundColor: '#9D9D9D',
        borderRadius: 20,
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
})