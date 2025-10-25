import React from 'react';
import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const ToggleButton = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 1000;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: 0.125rem solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.background.primary};
  color: ${props => props.theme.text.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  box-shadow: ${props => props.theme.shadows.medium};
  
  &:hover {
    transform: scale(1.1);
    box-shadow: ${props => props.theme.shadows.glow};
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.text.white};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 48rem) {
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    font-size: 1rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  
  ${ToggleButton}:hover & {
    transform: rotate(180deg);
  }
`;

/**
 * Theme toggle button component
 * Allows users to switch between light and dark modes
 */
const ThemeToggle = () => {
  const { isDarkMode, toggleTheme, theme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} theme={theme} title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
      <IconWrapper>
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </IconWrapper>
    </ToggleButton>
  );
};

export default ThemeToggle;
