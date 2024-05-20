import { TextStyle, ViewStyle } from "react-native";


const defaultTextStyle: TextStyle = {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400'
}

const defaultContainerStyle: ViewStyle = {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 20,
}


module MyStyleSheet {
    export module Container {
        export const BASE: ViewStyle = defaultContainerStyle;
        export const CENTER: ViewStyle = {
            ...defaultContainerStyle,
            alignItems: 'center',
            justifyContent: 'center',
        }
    };

    export module Color {
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
        
        export const BRAND = '#EF4023';
        export const PRIMARY = BLACK;
        export const SECONDARY = WHITE;
        export const TRANSPARENT = 'transparent';
    };

    export module Text {
        export const BASE: TextStyle = defaultTextStyle;

        export const LINK: TextStyle = {
            ...defaultTextStyle,
            color: Color.GRAY,
            fontWeight: '600',
        }

        export const SUBTITLE: TextStyle = {
            ...defaultTextStyle,
            fontSize: 20,
            fontWeight: '700',
        }

        export const TITLE: TextStyle = {
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