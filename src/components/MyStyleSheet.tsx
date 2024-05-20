import { TextStyle, ViewStyle } from "react-native";


module MyStyleSheet {
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
        export const PRIMARY = WHITE;
        export const SECONDARY = BLACK;
        export const TRANSPARENT = 'transparent';
    };


    export module Text {
        export const BASE: TextStyle = {
            color: Color.SECONDARY,
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: '400',
        };

        export const STRONG: TextStyle = {
            ...BASE,
            fontWeight: '700',
        }

        export const LINK: TextStyle = {
            ...BASE,
            color: Color.GRAY,
            fontWeight: '600',
        };

        export const INPUT: TextStyle = {
            ...BASE,
        };

        export const LABEL: TextStyle = {
            ...BASE,
            color: MyStyleSheet.Color.SECONDARY,
            fontWeight: '600',
        }

        export const SUBTITLE: TextStyle = {
            ...BASE,
            fontSize: 20,
            fontWeight: '700',
        };

        export const TITLE: TextStyle = {
            ...BASE,
            fontSize: 28,
            fontWeight: '700',
        };
    };

    export module Container {
        export const BASE: ViewStyle = {
            flex: 1,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 20,
            paddingTop: 20,
        };

        export const CENTER: ViewStyle = {
            ...BASE,
            alignItems: 'center',
            justifyContent: 'center',
        };

        export const INPUT: ViewStyle = {
            borderBottomColor: Color.GRAY,
            borderBottomWidth: 1,
            paddingVertical: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }
    };
}


export type ColorType =
    typeof MyStyleSheet.Color.BRAND | typeof MyStyleSheet.Color.PRIMARY | typeof MyStyleSheet.Color.SECONDARY | typeof MyStyleSheet.Color.TRANSPARENT |
    typeof MyStyleSheet.Color.WHITE | typeof MyStyleSheet.Color.GRAY | typeof MyStyleSheet.Color.BLACK | typeof MyStyleSheet.Color.RED |
    typeof MyStyleSheet.Color.ORANGE | typeof MyStyleSheet.Color.YELLOW | typeof MyStyleSheet.Color.GREEN |
    typeof MyStyleSheet.Color.BLACK | typeof MyStyleSheet.Color.PURPLE | typeof MyStyleSheet.Color.PINK | string;


export default MyStyleSheet;