import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./components/**/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#BE0F0F',
                'passive-gray': '#6B7280'
            },
            fontFamily: {
                'didact': ['"Didact Gothic"', 'sans-serif']
            },
            screens: {
                'xs': '375px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
                '3xl': '1920px',
                '4xl': '2560px',
            }
        }
    },
}


