/* eslint-disable no-shadow */
export const theme = {
    colors: {
        primary: 'red',
        secondary: 'tan',
        hint: 'grey',
    },
    borders: {
        primary: '2px solid red',
        secondary: '2px solid tan',
    },
    filters: {
        colors: {
            primary: 'blue',
            secondary: 'grey',
        },
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
    // forms: {
    //     input: {
    //         color: 'primary',
    //         border: 'none',
    //     },
    // },
};

declare module 'styled-components' {
    type Theme = typeof theme;
    export interface DefaultTheme extends Theme {}
}
