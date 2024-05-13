import { TextStyle, ViewStyle } from "react-native";

export type Colors = '#FFFFFF' | '#000000' | '#EF4023' | 'transparent';

export const lightColor: Colors = '#FFFFFF';
export const darkColor: Colors = '#000000';
export const brandColor: Colors = '#EF4023';

export const TestStyle: ViewStyle = {
    borderColor: darkColor,
    borderRadius: 0,
    borderStyle: 'solid',
    borderWidth: 2,
};

export const defaultText: TextStyle = {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400'
}