/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                // CBB Brand Colors
                cbb: {
                    primary: "#4cdef5", // Primary Blue
                    secondary: "#1b7bb3", // Secondary Blue
                    dark: "#1e3a8a", // Dark Blue
                    darkbg: "#0e0e0e", // Darker sections
                    lightbg: "#1a1a1a", // Lighter sections
                },
                // Legacy colors (keeping for backward compatibility)
                primary: "#050816",
                secondary: "#aaa6c3",
                tertiary: "#151030",
                "black-100": "#100d25",
                "black-200": "#090325",
                "white-100": "#f3f3f3",
            },
            boxShadow: {
                card: "0px 35px 120px -15px #211e35",
                "cbb-glow": "0px 0px 20px 5px rgba(76, 222, 245, 0.5)",
                "cbb-glow-strong": "0px 0px 30px 10px rgba(76, 222, 245, 0.7)",
            },
            screens: {
                xs: "450px",
            },
            backgroundImage: {
                "hero-pattern": "url('/src/assets/herobg.png')",
                "cbb-gradient": "linear-gradient(to right, #1b7bb3, #4cdef5, #1e3a8a)",
                "cbb-gradient-radial": "radial-gradient(circle, #4cdef5, #1b7bb3)",
            },
            keyframes: {
                glitch: {
                    "0%": { "clip-path": "inset(20% 0 50% 0)" },
                    "5%": { "clip-path": "inset(10% 0 60% 0)" },
                    "10%": { "clip-path": "inset(15% 0 55% 0)" },
                    "15%": { "clip-path": "inset(25% 0 35% 0)" },
                    "20%": { "clip-path": "inset(30% 0 40% 0)" },
                    "25%": { "clip-path": "inset(40% 0 20% 0)" },
                    "30%": { "clip-path": "inset(10% 0 60% 0)" },
                    "35%": { "clip-path": "inset(15% 0 55% 0)" },
                    "40%": { "clip-path": "inset(25% 0 35% 0)" },
                    "45%": { "clip-path": "inset(30% 0 40% 0)" },
                    "50%": { "clip-path": "inset(20% 0 50% 0)" },
                    "55%": { "clip-path": "inset(10% 0 60% 0)" },
                    "60%": { "clip-path": "inset(15% 0 55% 0)" },
                    "65%": { "clip-path": "inset(25% 0 35% 0)" },
                    "70%": { "clip-path": "inset(30% 0 40% 0)" },
                    "75%": { "clip-path": "inset(40% 0 20% 0)" },
                    "80%": { "clip-path": "inset(20% 0 50% 0)" },
                    "85%": { "clip-path": "inset(10% 0 60% 0)" },
                    "90%": { "clip-path": "inset(15% 0 55% 0)" },
                    "95%": { "clip-path": "inset(25% 0 35% 0)" },
                    "100%": { "clip-path": "inset(30% 0 40% 0)" },
                },
            },
            animation: {
                "glitch-after": "glitch var(--after-duration) infinite linear alternate-reverse",
                "glitch-before": "glitch var(--before-duration) infinite linear alternate-reverse",
            },
        },
    },
    plugins: [],
};