import React from 'react';
import { ThemeContext } from '../contexts/themeContext';
import { useTheme } from '../hooks/useThemeContext';

interface ThemeProviderProps {
    children: React.ReactNode;
}


export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const { currentTheme, toggleTheme, isDark } = useTheme();

    return (
        <ThemeContext.Provider value={{ currentTheme, toggleTheme, isDark }}>
            {children}
        </ThemeContext.Provider>
    );
};