import React, { forwardRef } from 'react';

/* COMPONENTS */
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MyStyleSheet, { ColorType } from './MyStyleSheet';


type ButtonStyle = {
    background?: ColorType;
    border?: ColorType;
    textColor?: ColorType;
    style?: {};
}

export type ButtonProps = {
    onPress?: TouchableOpacityProps['onPress'];
    title?: string;
    buttonStyle?: ButtonStyle;
} & TouchableOpacityProps;

/**
 * @param onPress Function that is activated by pressing the button
 * @param title Text displayed in the exit button
 * @param buttonStyle Button style
 * @returns `TouchableOpacity` JSX element that contains a text
 */
export default function Button({ onPress, title, buttonStyle }: ButtonProps) {

    const getButtonStyle = (bg?: ColorType, outline?: ColorType): {} => {
        return {
            backgroundColor: bg ? bg : MyStyleSheet.Color.TRANSPARENT,
            borderColor: outline ? outline : MyStyleSheet.Color.TRANSPARENT,
        }
    }

    const getTextColor = (color?: ColorType): {} => {
        return { color: color ? color : MyStyleSheet.Color.SECONDARY }
    }

    return (
        <TouchableOpacity style={[styles.button, getButtonStyle(buttonStyle?.background, buttonStyle?.border), buttonStyle?.style]} onPress={onPress}>
            <Text style={[styles.buttonText, getTextColor(buttonStyle?.textColor)]}>{title}</Text>
        </TouchableOpacity>
    );
};


/**
 * @param handleExit Function that handles the exit request
 * @param text Text displayed in the exit button
 * @returns `TouchableOpacity` JSX element that contains an icon and a text
 */
export function ExitButton({ handleExit, text }: { handleExit: () => void; text: string; }) {
    return (
        <TouchableOpacity onPress={handleExit} style={styles.exitButton}>
            <Ionicons name='exit-outline' color={MyStyleSheet.Color.RED} size={25} />
            <Text style={styles.exitButtonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 16,
        width: 'auto',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    exitButton: {
        alignItems: 'center',
        borderColor: MyStyleSheet.Color.RED,
        borderRadius: 10,
        borderWidth: 2,
        flexDirection: 'row',
        padding: 20,
        height: 85,
        gap: 15,
    },
    exitButtonText: {
        color: MyStyleSheet.Color.RED,
        fontSize: 16,
        fontWeight: '700',
    }
});