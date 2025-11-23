import { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';
import { ThemeContextType } from '../types/theme';

export const useThemeContext = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useAppTheme debe ser usado dentro de un ThemeProvider');
    }
    return context;
};