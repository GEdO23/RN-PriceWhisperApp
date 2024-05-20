import { TextStyle, ViewStyle } from "react-native";


const defaultTextStyle: TextStyle = {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400'
}

const defaultContainerStyle: ViewStyle = {
    flex: 1,
}


module MyStyleSheet {
    export module Container {
        export const base: ViewStyle = defaultContainerStyle;
        export const center: ViewStyle = {
            ...defaultContainerStyle,
            alignItems: 'center',
            justifyContent: 'center',
        }
    };

    export module Color {
        export const PRIMARY = '#FFFFFF';
        export const SECONDARY = '#000000';
        export const BRAND = '#EF4023';
        export const TRANSPARENT = 'transparent';
        export const WHITE = '#FFFFFF';
        export const GRAY = '#3a3a3a';
        export const BLACK = '#191925';
        export const RED = '#D01919';
        export const ORANGE = '#F26202';
        export const YELLOW = '#FBBD08';
        export const GREEN = '#21BA45';
        export const BLUE = '#2185D0';
        export const PURPLE = '#A333C8';
        export const PINK = '#E03997';
    };

    export module Text {
        export const base: TextStyle = defaultTextStyle;

        export const title: TextStyle = {
            ...defaultTextStyle,
            fontSize: 28,
            fontWeight: '700',
        }
    };
}


export type ColorType =
            typeof MyStyleSheet.Color.BRAND | typeof MyStyleSheet.Color.PRIMARY | typeof MyStyleSheet.Color.SECONDARY | typeof MyStyleSheet.Color.TRANSPARENT |
            typeof MyStyleSheet.Color.WHITE | typeof MyStyleSheet.Color.GRAY | typeof MyStyleSheet.Color.BLACK | typeof MyStyleSheet.Color.RED |
            typeof MyStyleSheet.Color.ORANGE | typeof MyStyleSheet.Color.YELLOW | typeof MyStyleSheet.Color.GREEN |
            typeof MyStyleSheet.Color.BLACK | typeof MyStyleSheet.Color.PURPLE | typeof MyStyleSheet.Color.PINK | string;


export default MyStyleSheet;