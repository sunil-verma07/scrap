/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const rotateX = plugin(function ({ addUtilities }) {
    addUtilities({
        '.rotate-y-180': {
            transform: 'rotateY(180deg)',
        },
    });
});
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: 'class',
    theme: {

        extend: {
            animation: {
                'spin-slow': 'spin 5s linear infinite',
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray'),
                        fontSize: '1.125rem',
                    },
                },
            }),
            container: {
                center: true,
                padding: '1rem',
            },
            maxWidth: {
                '1/2': '640px',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1335px',
            },
            fontFamily: {
                mulish: ['Mulish', 'sans-serif'],
                reey: ['reey', 'sans-serif'],
                Lato: ['Lato', 'sans-serif'],
                BalooChettan2: ['BalooChettan2', 'sans-serif'],
                HindMysuru: ['HindMysuru', 'sans-serif'],
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                white: '#ffffff',
                black: '#08111F',
                primary: '#47BDFF',
                secondary: '#B476E5',
                gray: {
                    DEFAULT: '#7780A1',
                    dark: '#1C2331',
                },
                defaultLime: "#71BF44"
            },
            borderRadius: {
                'custom': '0 0 50% 50%/0 0 100% 100%',
            },
        },
    },
    plugins: [rotateX, require('@tailwindcss/typography')],
};


// module.exports = {
//     content: [
//         "./src/**/*.{js,jsx,ts,tsx}",
//     ],
//     theme: {
//         extend: {
//             colors: {
//                 transparent: 'transparent',
//                 current: 'currentColor',
//                 white: '#ffffff',
//                 black: '#08111F',
//                 primary: '#47BDFF',
//                 secondary: '#B476E5',
//                 gray: {
//                     DEFAULT: '#7780A1',
//                     dark: '#1C2331',
//                 }
//             },
//         },
//     },
//     plugins: [],
// }
