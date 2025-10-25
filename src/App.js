import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    
    @media (max-width: 75rem) {
      font-size: 15px;
    }
    
    @media (max-width: 48rem) {
      font-size: 14px;
    }
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: var(--text-primary, #333);
    background: var(--bg-primary, #ffffff);
    overflow-x: hidden;
    transition: color 0.3s ease, background-color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
  }
  
  button {
    font-family: inherit;
  }
  
  /* Smooth transitions for theme changes */
  * {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
`;

/**
 * Main App component that renders the complete marketing page
 * @returns {JSX.Element} The complete app layout
 */
function App() {
  return (
    <ThemeProvider>
      <AppContainer>
        <GlobalStyle />
        <ThemeToggle />
        <Header />
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Contact />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
