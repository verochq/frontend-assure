import { createContext } from "react"

export interface ThemeType {
    theme: string
    setTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeType>({theme: "light", setTheme: () => {}});