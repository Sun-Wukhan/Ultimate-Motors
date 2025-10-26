import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiPhone, FiMapPin, FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.$scrolled ? props.theme?.background?.secondary || 'rgba(0, 0, 0, 0.98)' : props.theme?.background?.primary || 'rgba(0, 0, 0, 0.9)'};
  backdrop-filter: blur(0.625rem);
  transition: all 0.3s ease;
  border-bottom: ${props => props.$scrolled ? `0.0625rem solid ${props.theme?.colors?.primary || '#dc2626'}30` : `0.0625rem solid ${props.theme?.colors?.primary || '#dc2626'}20`};
`;

const TopBar = styled.div`
  background: ${props => props.theme?.background?.secondary || 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)'};
  padding: 0.5rem 0;
  border-bottom: 0.0625rem solid ${props => props.theme?.colors?.primary || '#dc2626'}30;
  
  @media (max-width: 48rem) {
    display: none;
  }
`;

const TopBarContent = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 1.875rem;
  align-items: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme?.colors?.primary || '#dc2626'};
  font-size: 0.875rem;
  font-weight: 500;
  
  svg {
    color: ${props => props.theme?.colors?.primary || '#dc2626'};
  }
`;

const MainNav = styled.nav`
  padding: 0.9375rem 0;
`;

const NavContent = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: ${props => props.theme?.colors?.primary || '#dc2626'};
  text-decoration: none;
  letter-spacing: -0.03125rem;
  
  span {
    color: ${props => props.theme?.text?.white || '#fff'};
    font-weight: 300;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.5rem;
  align-items: center;
  
  @media (max-width: 48rem) {
    display: none;
  }
`;

const NavLink = styled.li`
  a {
    color: ${props => props.theme?.text?.primary || '#fff'};
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      color: ${props => props.theme?.colors?.primary || '#dc2626'};
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -0.3125rem;
      left: 0;
      width: 0;
      height: 0.125rem;
      background: linear-gradient(90deg, #dc2626, #ef4444);
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
  }
`;

const AppointmentBtn = styled.button`
  background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
  color: ${props => props.theme?.text?.white || '#fff'};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 1.875rem;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.03125rem;
  
  &:hover {
    transform: translateY(-0.125rem);
    box-shadow: 0 0.625rem 25px rgba(220, 38, 38, 0.4);
  }
  
  @media (max-width: 48rem) {
    display: none;
  }
`;

const MobileMenuBtn = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme?.text?.white || '#fff'};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 48rem) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme?.background?.overlay || 'rgba(10, 10, 10, 0.98)'};
  backdrop-filter: blur(0.625rem);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.875rem;
  transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
`;

const MobileNavLink = styled.a`
  color: ${props => props.theme?.text?.primary || '#fff'};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme?.colors?.primary || '#dc2626'};
  }
`;

const MobileAppointmentBtn = styled(AppointmentBtn)`
  display: block;
  margin-top: 1.25rem;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 1.875rem;
  right: 1.875rem;
  background: none;
  border: none;
  color: ${props => props.theme?.text?.white || '#fff'};
  font-size: 1.875rem;
  cursor: pointer;
`;

const HeaderThemeToggle = styled.button`
  background: transparent;
  border: 0.0625rem solid #dc2626;
  color: ${props => props.theme?.colors?.primary || '#dc2626'};
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  margin-left: 0.9375rem;
  
  &:hover {
    background: #dc2626;
    color: ${props => props.theme?.text?.white || '#fff'};
    transform: scale(1.1);
  }
  
  @media (max-width: 48rem) {
    display: none;
  }
`;

/**
 * Header component with navigation and contact information
 * @returns {JSX.Element} The header component
 */
const Header = () => {
  const { isDarkMode, toggleTheme, theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <HeaderContainer $scrolled={scrolled} theme={theme}>
        <TopBar theme={theme}>
          <TopBarContent>
            <ContactInfo>
              <ContactItem theme={theme}>
                <FiMapPin />
                <span>Toronto, ON M5V 3A8</span>
              </ContactItem>
              <ContactItem theme={theme}>
                <FiPhone />
                <span>(416) 555-MOTORS</span>
              </ContactItem>
            </ContactInfo>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <ContactItem theme={theme}>
                <span>MON-FRI: 8:00AM-6:00PM | SAT: 9:00AM-4:00PM</span>
              </ContactItem>
              <HeaderThemeToggle onClick={toggleTheme} title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
                {isDarkMode ? <FiSun /> : <FiMoon />}
              </HeaderThemeToggle>
            </div>
          </TopBarContent>
        </TopBar>
        
        <MainNav>
          <NavContent>
            <Logo theme={theme}>
              ULTIMATE <span>MOTORS</span>
            </Logo>
            
            <NavLinks>
              <NavLink theme={theme}><a href="#home">Home</a></NavLink>
              <NavLink theme={theme}><a href="#services">Services</a></NavLink>
              <NavLink theme={theme}><a href="#about">About</a></NavLink>
              <NavLink theme={theme}><a href="#gallery">Gallery</a></NavLink>
              <NavLink theme={theme}><a href="#contact">Contact</a></NavLink>
            </NavLinks>
            
            <AppointmentBtn theme={theme}>Book Consultation</AppointmentBtn>
            
            <MobileMenuBtn theme={theme} onClick={toggleMobileMenu}>
              <FiMenu />
            </MobileMenuBtn>
          </NavContent>
        </MainNav>
      </HeaderContainer>
      
      <MobileMenu $isOpen={mobileMenuOpen} theme={theme}>
        <CloseBtn onClick={toggleMobileMenu}>
          <FiX />
        </CloseBtn>
        <MobileNavLink theme={theme} href="#home" onClick={toggleMobileMenu}>Home</MobileNavLink>
        <MobileNavLink theme={theme} href="#services" onClick={toggleMobileMenu}>Services</MobileNavLink>
        <MobileNavLink theme={theme} href="#about" onClick={toggleMobileMenu}>About</MobileNavLink>
        <MobileNavLink theme={theme} href="#gallery" onClick={toggleMobileMenu}>Gallery</MobileNavLink>
        <MobileNavLink theme={theme} href="#contact" onClick={toggleMobileMenu}>Contact</MobileNavLink>
        <MobileAppointmentBtn theme={theme}>
          Book Consultation
        </MobileAppointmentBtn>
      </MobileMenu>
    </>
  );
};

export default Header;
