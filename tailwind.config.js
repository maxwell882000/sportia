/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ], theme: {
        extend: {
            borderRadius: {
                app: "0.5rem",
                info: '1.5rem'
            },

            backgroundColor: {
                "app-dark": "#15171C"
            },
            opacity: {
                '12': '0.12',
            },
        },
    },
    plugins: [],
}

