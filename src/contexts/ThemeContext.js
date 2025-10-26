import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const themes = {
  light: {
    // Background colors
    background: {
      primary: '#ffffff',
      secondary: '#f8f9fa',
      tertiary: '#e9ecef',
      card: 'linear-gradient(135deg, rgba(220, 38, 38, 0.02) 0%, rgba(239, 68, 68, 0.01) 100%)',
      overlay: 'rgba(255, 255, 255, 0.9)',
      videoOverlay: 'rgba(0, 0, 0, 0.4)',
      input: 'rgba(0, 0, 0, 0.05)',
      dropdown: '#ffffff',
    },
    // Text colors
    text: {
      primary: '#212529',
      secondary: '#343a40',
      accent: '#dc2626',
      light: '#212529',
      white: '#ffffff',
      placeholder: '#495057',
    },
    // Brand colors
    colors: {
      primary: '#dc2626',
      secondary: '#000000',
      accent: '#ffd700',
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#ef4444',
      info: '#3b82f6',
      border: 'rgba(0, 0, 0, 0.2)',
    },
    // Gradients
    gradients: {
      primary: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
      secondary: 'linear-gradient(135deg, #000000 0%, #374151 100%)',
      overlay: 'linear-gradient(135deg, rgba(220, 38, 38, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%)',
    },
    // Shadows
    shadows: {
      small: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
      medium: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
      large: '0 1rem 3rem rgba(0, 0, 0, 0.175)',
      glow: '0 0 2rem rgba(220, 38, 38, 0.3)',
      card: '0 0.9375rem 1.875rem rgba(220, 38, 38, 0.1)',
    },
  },
  dark: {
    // Background colors
    background: {
      primary: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #1a1a1a 100%)',
      secondary: '#1a1a1a',
      tertiary: '#2d2d2d',
      card: 'linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, rgba(239, 68, 68, 0.02) 100%)',
      overlay: 'rgba(0, 0, 0, 0.9)',
      videoOverlay: 'rgba(0, 0, 0, 0.6)',
      input: 'rgba(255, 255, 255, 0.05)',
      dropdown: '#1a1a1a',
    },
    // Text colors
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
      accent: '#ff4444',
      light: '#cccccc',
      white: '#ffffff',
      placeholder: '#999999',
    },
    // Brand colors
    colors: {
      primary: '#dc2626',
      secondary: '#ffffff',
      accent: '#ffd700',
      success: '#4ade80',
      warning: '#facc15',
      danger: '#ef4444',
      info: '#06b6d4',
      border: 'rgba(255, 255, 255, 0.2)',
    },
    // Gradients
    gradients: {
      primary: 'linear-gradient(135deg, #ff4444 0%, #dc2626 100%)',
      secondary: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
      overlay: 'linear-gradient(135deg, rgba(255, 68, 68, 0.9) 0%, rgba(0, 0, 0, 0.8) 100%)',
    },
    // Shadows
    shadows: {
      small: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.3)',
      medium: '0 0.5rem 1rem rgba(0, 0, 0, 0.4)',
      large: '0 1rem 3rem rgba(0, 0, 0, 0.5)',
      glow: '0 0 2rem rgba(255, 68, 68, 0.4)',
      card: '0 0.9375rem 1.875rem rgba(220, 38, 38, 0.1)',
    },
  },
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem('ultimate-motors-theme');
    if (saved) {
      return saved === 'dark';
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const currentTheme = isDarkMode ? themes.dark : themes.light;

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('ultimate-motors-theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      // Only auto-switch if user hasn't manually set a preference
      if (!localStorage.getItem('ultimate-motors-theme')) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Update CSS custom properties for theme
  useEffect(() => {
    const root = document.documentElement;
    const theme = currentTheme;

    // Set CSS custom properties
    root.style.setProperty('--bg-primary', theme.background.primary);
    root.style.setProperty('--bg-secondary', theme.background.secondary);
    root.style.setProperty('--bg-tertiary', theme.background.tertiary);
    root.style.setProperty('--text-primary', theme.text.primary);
    root.style.setProperty('--text-secondary', theme.text.secondary);
    root.style.setProperty('--text-accent', theme.text.accent);
    root.style.setProperty('--color-primary', theme.colors.primary);
    root.style.setProperty('--color-secondary', theme.colors.secondary);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme.background.primary);
    }
  }, [currentTheme]);

  const value = {
    theme: currentTheme,
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
