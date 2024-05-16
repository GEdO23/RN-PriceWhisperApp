import React, { forwardRef } from 'react';

/* COMPONENTS */
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Colors, darkColor, lightColor } from './Styles';
import { Ionicons } from '@expo/vector-icons';


type ButtonStyle = {
    background?: Colors;
    border?: Colors;
    textColor?: Colors;
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

    const dfBackgroundColor: Colors = 'transparent';
    const dfOutlineColor: Colors = 'transparent';
    const dfTextColor: Colors = darkColor;

    const getButtonStyle = (bg?: Colors, outline?: Colors): {} => {
        return {
            backgroundColor: bg ? bg : dfBackgroundColor,
            borderColor: outline ? outline : dfOutlineColor,
        }
    }

    const getTextColor = (color?: Colors): {} => {
        return { color: color ? color : dfTextColor }
    }

    return (
        <TouchableOpacity style={[styles.button, getButtonStyle(buttonStyle?.background, buttonStyle?.border)]} onPress={onPress}>
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
            <Ionicons name='exit-outline' color='#f00000' size={25} />
            <Text style={styles.exitButtonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderColor: 'transparent',
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 16,
        width: '100%',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    exitButton: {
        alignItems: 'center',
        borderColor: '#ff00003f',
        borderRadius: 10,
        borderWidth: 2,
        flexDirection: 'row',
        padding: 20,
        height: 85,
        gap: 15,
    },
    exitButtonText: {
        color: '#F00000',
        fontSize: 16,
        fontWeight: '700',
    }
});