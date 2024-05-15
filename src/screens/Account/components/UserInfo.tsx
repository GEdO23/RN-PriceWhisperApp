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
            <Text style={[styles.info, {fontWeight: 'bold'}]}>{name}:</Text>
            <Text style={styles.info}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        color: '#000',
        fontSize: 16,
    },
    infoContainer: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#9D9D9D'
    },
    infoListContainer: {
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        gap: 25,
        padding: 25,
    },
})