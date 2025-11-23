// 1. Define la forma de un objeto de tema.
// Usamos `typeof darkTheme` para que TypeScript infiera los tipos automáticamente desde tu objeto.
export type Theme = typeof import('../constants/theme').darkTheme;

// 2. Define la forma del valor que tu Contexto proveerá.
export interface ThemeContextType {
    currentTheme: Theme | null; // <-- ¡La clave! Puede ser un Theme o null.
    toggleTheme: () => void;
    isDark: boolean;
}