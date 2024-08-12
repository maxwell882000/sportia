/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ], theme: {
        extend: {
            borderRadius: {
                app: "0.5rem"
            },
            backgroundColor: {
                "app-dark": "#15171C"
            },

        },
    },
    plugins: [],
}

