export const colors = {
    dark: {
        //default don't delete
        primaryText: '#000000',
        secondaryText: '#989898',
        error: '#f02849',
        inputBG: '#edf4f4',
        primary: '#1877f2',
        focus: '#1850f2',
        background: '#FAFBFC',
        border: '#e4e6eb',
        white: '#FFFFFF',
        disabled: '#a2ccf2',
        oceanBlue: '#0077b6',
        veryLightPink: '#bcbcbc',
        lightBlue: '#96d3f2',
        trackColor: '#96d3f2',
        placeholder: '#bcbcbc',
        // custom
        // custom
        primaryColor: '#1ab65c',
        secondaryColor: '#04e865',
        textColor: '#212121',
        textGreyColor: '#717171',
        greyColor: '#e0e0e0',
        whiteColor: '#FFFFFF',
        blackColor: '#000000',
        darkGreyColor: '#9e9e9e',
        yellowColor: '#ffd300',
        blueAgentColor: '#00bcd3',
        redColor: '#ff5e75',
        blueColor: '#3e7cfe',
        greenColor: '#53a777',
        backgroundGrey: '#f5f5f5',
        backgroundGreen: '#edfaf2',
        backgroundPrimaryButton: '#e8f8ef',
    },
    light: {
        //default don't delete
        primaryText: '#000000',
        secondaryText: '#989898',
        error: '#f02849',
        inputBG: '#edf4f4',
        primary: '#1877f2',
        focus: '#1850f2',
        background: '#FAFBFC',
        border: '#e4e6eb',
        white: '#FFFFFF',
        disabled: '#a2ccf2',
        oceanBlue: '#0077b6',
        veryLightPink: '#bcbcbc',
        lightBlue: '#96d3f2',
        trackColor: '#96d3f2',
        placeholder: '#bcbcbc',
        // custom
        primaryColor: '#1ab65c',
        secondaryColor: '#04e865',
        textColor: '#212121',
        textGreyColor: '#717171',
        greyColor: '#e0e0e0',
        whiteColor: '#FFFFFF',
        blackColor: '#000000',
        darkGreyColor: '#9e9e9e',
        yellowColor: '#ffd300',
        blueAgentColor: '#00bcd3',
        redColor: '#ff5e75',
        blueColor: '#3e7cfe',
        greenColor: '#53a777',
        backgroundGrey: '#f5f5f5',
        backgroundGreen: '#edfaf2',
        backgroundPrimaryButton: '#e8f8ef',
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
    | 'oceanBlue'
    | 'veryLightPink'
    | 'lightBlue'
    | 'trackColor'
    | 'placeholder'
    | 'primaryColor'
    | 'secondaryColor'
    | 'textColor'
    | 'textGreyColor'
    | 'greyColor'
    | 'whiteColor'
    | 'blackColor'
    | 'darkGreyColor'
    | 'yellowColor'
    | 'blueAgentColor'
    | 'redColor'
    | 'blueColor'
    | 'greenColor'
    | 'backgroundGrey'
    | 'backgroundGreen'
    | 'backgroundPrimaryButton';

export type ThemeColor = typeof colors;
