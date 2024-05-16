import { forwardRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Colors, darkColor, lightColor } from './Styles';


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

const Button = forwardRef<TouchableOpacity, ButtonProps>(({ onPress, title, buttonStyle }, ref) => {
    
    const dfBackgroundColor: Colors = lightColor;
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
        <TouchableOpacity ref={ref} style={[styles.button, getButtonStyle(buttonStyle?.background, buttonStyle?.border)]} onPress={onPress}>
            <Text style={[styles.buttonText, getTextColor(buttonStyle?.textColor)]}>{title}</Text>
        </TouchableOpacity>
    );
});

export default Button;

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
    }
});