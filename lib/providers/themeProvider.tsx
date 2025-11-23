import React from 'react';
import { ThemeContext } from '../contexts/themeContext';
import { useThemeContext } from '../hooks/useThemeContext';

interface ThemeProviderProps {
    children: React.ReactNode;
}


export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const { currentTheme, toggleTheme, isDark } = useThemeContext();

    return (
        <ThemeContext.Provider value={{ currentTheme, toggleTheme, isDark }}>
            {children}
        </ThemeContext.Provider>
    );
};