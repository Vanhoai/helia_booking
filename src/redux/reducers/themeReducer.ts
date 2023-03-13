import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeState = {
    theme: 'light' | 'dark';
};

const defaultThemeState: ThemeState = {
    theme: 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: defaultThemeState,
    reducers: {
        setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
            console.log('action.payload', action.payload);
            if (action.payload === 'light') {
                state.theme = 'light';
            } else {
                state.theme = 'dark';
            }
        },
    },
});

export const ThemeActions = themeSlice.actions;
export default themeSlice.reducer;
