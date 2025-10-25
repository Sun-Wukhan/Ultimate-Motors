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
      overlay: 'rgba(255, 255, 255, 0.9)',
      videoOverlay: 'rgba(0, 0, 0, 0.4)',
    },
    // Text colors
    text: {
      primary: '#212529',
      secondary: '#6c757d',
      accent: '#dc2626',
      light: '#495057',
      white: '#ffffff',
    },
    // Brand colors
    colors: {
      primary: '#dc2626',
      secondary: '#000000',
      accent: '#ffd700',
      success: '#28a745',
      warning: '#ffc107',
      danger: '#dc3545',
      info: '#17a2b8',
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
    },
  },
  dark: {
    // Background colors
    background: {
      primary: '#0f0f0f',
      secondary: '#1a1a1a',
      tertiary: '#2d2d2d',
      overlay: 'rgba(0, 0, 0, 0.9)',
      videoOverlay: 'rgba(0, 0, 0, 0.6)',
    },
    // Text colors
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
      accent: '#ff4444',
      light: '#cccccc',
      white: '#ffffff',
    },
    // Brand colors
    colors: {
      primary: '#ff4444',
      secondary: '#ffffff',
      accent: '#ffd700',
      success: '#4ade80',
      warning: '#facc15',
      danger: '#ef4444',
      info: '#06b6d4',
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
