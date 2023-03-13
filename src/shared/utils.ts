import { FlexStyle } from 'react-native';
import { handleRound, handleSquare } from './function';

export interface DefaultStyleProps {
    flex?: boolean | number;
    flexShrink?: boolean | number;
    flexGrow?: boolean | number;
    padding?: number;
    margin?: number;
    square?: number;
    round?: number;
    wrap?: boolean;
    opacity?: number;
    radius?: number;
    alignSelf?: FlexStyle['alignSelf'];
}
export type RadiusProps = {
    bottomLeft?: number;
    bottomRight?: number;
    topLeft?: number;
    topRight?: number;
};

export type BorderProps = { width: number; color: string };

export type BorderType = {
    top?: BorderProps;
    left?: BorderProps;
    right?: BorderProps;
    bottom?: BorderProps;
};

export type GutterProps = {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    vertical?: number;
    horizontal?: number;
};

export const handleRadius = (radius: number | RadiusProps) => {
    if (isNumber(radius)) {
        return {
            borderRadius: radius,
        };
    }
    let borderRadius: { [key: string]: number } = {};
    const gutterKeys = Object.keys(radius) as Array<keyof RadiusProps>;
    gutterKeys.forEach((key) => {
        const capFirstLetter = key.charAt(0).toUpperCase() + key.slice(1);
        if (radius[key] !== undefined) {
            borderRadius[`border${capFirstLetter}Radius`] = radius[key] as number;
        }
    });
    return borderRadius;
};

export const handleBorder = (border: BorderProps | BorderType) => {
    if ('width' in border) {
        return { borderWidth: border.width, borderColor: border.color };
    }

    const borderKeys = Object.keys(border) as Array<keyof BorderType>;
    let borderBox: { [key: string]: number | string | undefined } = {};
    borderKeys.forEach((key) => {
        const capFirstLetter = key.charAt(0).toUpperCase() + key.slice(1);
        if (border[key] !== undefined) {
            borderBox[`border${capFirstLetter}Width`] = border[key]?.width as number;
            borderBox[`border${capFirstLetter}Color`] = border[key]?.color;
        }
    });
    return borderBox;
};

export const createDefaultStyle = (props: { [key: string]: any }) => [
    props.flex && { flex: isNumber(props.flex) ? props.flex : 1 },
    props.flexGrow && { flexGrow: isNumber(props.flexGrow) ? props.flexGrow : 1 },
    props.flexShrink && {
        flexShrink: isNumber(props.flexShrink) ? props.flexShrink : 1,
    },
    isNumber(props.square) && handleSquare(props.square),
    isNumber(props.round) && handleRound(props.round),
    props.radius && handleRadius(props.radius),
    props.borderStyle && { borderStyle: props.borderStyle },
    props.border && handleBorder(props.border),
    props.wrap && { flexWrap: 'wrap' },
    props.alignSelf && { alignSelf: props.alignSelf },
    isNumber(props.opacity) && { opacity: props.opacity },
];

export const isNumber = (x: any): x is number => typeof x === 'number';

export const isString = (x: any): x is string => typeof x === 'string';

export const isUndefined = (x: any): x is undefined => x === undefined;

export const handleGutter = (type: 'padding' | 'margin', gutter: number | GutterProps) => {
    if (isNumber(gutter)) {
        return {
            [type]: gutter,
        };
    }
    let padding: { [key: string]: number } = {};
    const gutterKeys = Object.keys(gutter) as Array<keyof GutterProps>;
    gutterKeys.forEach((key) => {
        const capFirstLetter = key.charAt(0).toUpperCase() + key.slice(1);
        if (gutter[key] !== undefined) {
            padding[`${type}${capFirstLetter}`] = gutter[key] as number;
        }
    });
    return padding;
};
