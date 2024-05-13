import { forwardRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Colors } from './Colors';


type ButtonStyle = {
    background?: Colors;
    border?: Colors;
    textColor?: Colors;
}

export type ButtonProps = {
    onPress?: TouchableOpacityProps['onPress'];
    title?: string;
    btnStyle?: ButtonStyle;
} & TouchableOpacityProps;

export const Button = forwardRef<TouchableOpacity, ButtonProps>(({ onPress, title, btnStyle }, ref) => {
    
    const dfBackgroundColor: Colors = '#FFFFFF';
    const dfOutlineColor: Colors = 'transparent';
    const dfTextColor: Colors = '#000000';

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
        <TouchableOpacity ref={ref} style={[styles.button, getButtonStyle(btnStyle?.background, btnStyle?.border)]} onPress={onPress}>
            <Text style={[styles.buttonText, getTextColor(btnStyle?.textColor)]}>{title}</Text>
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 16,
        width: '100%',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'transparent'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    }
});