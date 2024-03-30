import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./components/**/**/*.{js,vue,ts}",
        "./Layouts/**/*.vue",
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
            }
        }
    },
}


