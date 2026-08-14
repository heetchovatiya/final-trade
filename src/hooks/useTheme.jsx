import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    /* REGULATION_ADJUSTMENTS_START: Enforcing dark mode only */
    /*
    if (typeof window !== 'undefined') {
      return localStorage.getItem('uh-theme') || 'dark'
    }
    return 'dark'
    */
    return 'dark'
    /* REGULATION_ADJUSTMENTS_END */
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('uh-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
