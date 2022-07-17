/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const tailwindcssConfig = {
    darkMode: 'class',
    content: ['./pages/**/*.{js,tsx}', './components/**/*.{js,jsx}'],
    theme: {
        container: {
            center: true,
            padding: '0.75rem'
        },
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                zinc: colors.zinc,
                neutral: colors.neutral,
                violet: colors.violet,
                emerald: colors.emerald
            }
        }
    },
    plugins: []
}

module.exports = tailwindcssConfig
