import React from "react";

/* COMPONENTS */
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import MyStyleSheet from "~/components/MyStyleSheet";


/** 
 * @param name User display name
 * @returns A user display profile JSX element
 * */
export function UserDisplayProfile({ name }: { name: string; }) {

    /** Variable that contains the background image source for the profile display */
    const bg = { uri: 'https://static.vecteezy.com/system/resources/previews/000/680/551/original/glowing-orange-tech-arrows-concept.jpg' };

    return (
        <ImageBackground source={bg} resizeMode='cover' style={styles.profileContainer}>
            <Ionicons name='person-circle' color={MyStyleSheet.Color.PRIMARY} size={150} />
            <Text style={styles.profileName}>{name}</Text>
        </ImageBackground>
    )
}


/** 
 * `container` used to display user information
 * @param title Container info
 * @returns `container` JSX element with `title` and `children`
 * */
export function UserInfo({ title, children }: { title: string; children: any; }) {
    return (
        <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>{title}</Text>
            {children}
        </View>
    )
}


/** 
 * @param icon Optional icon that will be displayed beside information
 * @param name Information title name
 * @param value Information value
 * @returns A user info line JSX element
 * */
export function UserInfoLine({ icon, name, value }: { icon?: any; name: string; value: any; }) {
    return (
        <View style={styles.infoLineContainer}>
            <Ionicons name={icon} color={MyStyleSheet.Color.SECONDARY} size={25} />
            <View>
                <Text style={styles.infoName}>{name}</Text>
                <Text style={styles.infoValue}>{value}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    infoContainer: {
        padding: 25,
        gap: 20,
    },
    infoLineContainer: {
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
        color: MyStyleSheet.Color.SECONDARY,
        fontSize: 16,
        fontWeight: '700',
    },
    infoTitle: {
        color: MyStyleSheet.Color.SECONDARY,
        fontSize: 20,
        fontWeight: '700',
    },
    infoValue: {
        color: 'rgba(0, 0, 0, .5)',
        fontSize: 16,
    },
    profileContainer: {
        alignItems: 'center',
        padding: 100,
        justifyContent: 'center',
    },
    profileName: {
        fontSize: 20,
        color: MyStyleSheet.Color.PRIMARY,
        fontWeight: '600'
    },
})