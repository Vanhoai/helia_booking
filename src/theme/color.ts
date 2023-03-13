export const colors = {
    dark: {
        primaryText: '#212121',
        secondaryText: '#717171',
        error: '#ff5e75',
        inputBG: '#edfaf2',
        primary: '#1ab65c',
        focus: '#53a777',
        background: '#FAFBFC',
        border: '#e4e6eb',
        white: '#FFFFFF',
        disabled: '#a2ccf2',
        trackColor: '#5cf255',
        placeholder: '#bcbcbc',
        greenColor: '#53a777',
        backgroundGrey: '#f5f5f5',
        backgroundGreen: '#edfaf2',
    },
    light: {
        primaryText: '#212121',
        secondaryText: '#717171',
        error: '#ff5e75',
        inputBG: '#edfaf2',
        primary: '#1ab65c',
        focus: '#53a777',
        background: '#FAFBFC',
        border: '#e4e6eb',
        white: '#FFFFFF',
        disabled: '#a2ccf2',
        trackColor: '#5cf255',
        placeholder: '#bcbcbc',
        greenColor: '#53a777',
        backgroundGrey: '#f5f5f5',
        backgroundGreen: '#edfaf2',
    },
};

export type Color =
    | 'primaryText'
    | 'secondaryText'
    | 'error'
    | 'inputBG'
    | 'primary'
    | 'focus'
    | 'background'
    | 'border'
    | 'white'
    | 'disabled'
    | 'trackColor'
    | 'placeholder'
    | 'greenColor'
    | 'backgroundGrey'
    | 'backgroundGreen';

export type ThemeColor = typeof colors;
