import { TextStyle, ViewStyle } from "react-native";

export module Color {
    export const PRIMARY = '#FFFFFF';
    export const SECONDARY = '#000000';
    export const BRAND = '#EF4023';
    export const TRANSPARENT = 'transparent';

    export module Semantic {
        export const WHITE = '#FFFFFF';
        export const BLACK = '#191925';
        export const RED = '#D01919';
        export const ORANGE = '#F26202';
        export const YELLOW = '#FBBD08';
        export const GREEN = '#21BA45';
        export const BLUE = '#2185D0';
        export const PURPLE = '#A333C8';
        export const PINK = '#E03997';
    }
}

export type ColorType = 
    typeof Color.BRAND | typeof Color.PRIMARY | typeof Color.SECONDARY | typeof Color.TRANSPARENT | 
    typeof Color.Semantic.WHITE | typeof Color.Semantic.BLACK | typeof Color.Semantic.RED |
    typeof Color.Semantic.ORANGE | typeof Color.Semantic.YELLOW | typeof Color.Semantic.GREEN |
    typeof Color.Semantic.BLACK | typeof Color.Semantic.PURPLE | typeof Color.Semantic.PINK;


export const TestStyle: ViewStyle = {
    borderColor: Color.SECONDARY,
    borderRadius: 0,
    borderStyle: 'solid',
    borderWidth: 2,
};

export const defaultText: TextStyle = {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400'
}