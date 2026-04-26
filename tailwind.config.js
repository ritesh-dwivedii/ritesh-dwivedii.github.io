/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Fraunces', 'serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                ebony: "#080808",
                graphite: "#121212",
                ochre: "#c5a059",
                bone: "#f5f5f0",
                alabaster: "#F9F9F7",
                sand: "#EAEAE2",
                ink: "#1A1A1A",
            },
            boxShadow: {
                'neo-out': '6px 6px 12px #040404, -6px -6px 12px #0c0c0c',
                'neo-in': 'inset 4px 4px 8px #040404, inset -4px -4px 8px #0c0c0c',
                'light-out': '6px 6px 12px #e2e2da, -6px -6px 12px #ffffff',
                'light-in': 'inset 4px 4px 8px #e2e2da, inset -4px -4px 8px #ffffff',
            }
        },
    },
    plugins: [],
}
