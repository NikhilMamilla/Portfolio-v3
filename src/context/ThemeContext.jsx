import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            const stored = window.localStorage.getItem("theme");
            if (stored === "light" || stored === "dark") return stored;
        }
        return "dark";
    });

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.localStorage.setItem("theme", theme);
        }
        if (typeof document !== "undefined") {
            const root = document.documentElement;
            if (theme === "light") {
                root.classList.add("theme-light");
            } else {
                root.classList.remove("theme-light");
            }
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
