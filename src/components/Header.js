import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiPhone, FiMapPin, FiMenu, FiX } from 'react-icons/fi';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(0, 0, 0, 0.98)' : 'rgba(0, 0, 0, 0.9)'};
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: ${props => props.scrolled ? '1px solid rgba(220, 38, 38, 0.3)' : '1px solid rgba(220, 38, 38, 0.2)'};
`;

const TopBar = styled.div`
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  padding: 8px 0;
  border-bottom: 1px solid rgba(220, 38, 38, 0.3);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const TopBarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #dc2626;
  font-size: 14px;
  font-weight: 500;
  
  svg {
    color: #dc2626;
  }
`;

const MainNav = styled.nav`
  padding: 15px 0;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  color: #dc2626;
  text-decoration: none;
  letter-spacing: -0.5px;
  
  span {
    color: #fff;
    font-weight: 300;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      color: #dc2626;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
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
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(220, 38, 38, 0.4);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuBtn = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
`;

const MobileNavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #dc2626;
  }
`;

const MobileAppointmentBtn = styled(AppointmentBtn)`
  display: block;
  margin-top: 20px;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: none;
  border: none;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
`;

/**
 * Header component with navigation and contact information
 * @returns {JSX.Element} The header component
 */
const Header = () => {
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
      <HeaderContainer scrolled={scrolled}>
        <TopBar>
          <TopBarContent>
            <ContactInfo>
              <ContactItem>
                <FiMapPin />
                <span>Toronto, ON M5V 3A8</span>
              </ContactItem>
              <ContactItem>
                <FiPhone />
                <span>(416) 555-MOTORS</span>
              </ContactItem>
            </ContactInfo>
            <ContactItem>
              <span>MON-FRI: 8:00AM-6:00PM | SAT: 9:00AM-4:00PM</span>
            </ContactItem>
          </TopBarContent>
        </TopBar>
        
        <MainNav>
          <NavContent>
            <Logo>
              ULTIMATE <span>MOTORS</span>
            </Logo>
            
            <NavLinks>
              <NavLink><a href="#home">Home</a></NavLink>
              <NavLink><a href="#services">Services</a></NavLink>
              <NavLink><a href="#about">About</a></NavLink>
              <NavLink><a href="#gallery">Gallery</a></NavLink>
              <NavLink><a href="#contact">Contact</a></NavLink>
            </NavLinks>
            
            <AppointmentBtn>Book Consultation</AppointmentBtn>
            
            <MobileMenuBtn onClick={toggleMobileMenu}>
              <FiMenu />
            </MobileMenuBtn>
          </NavContent>
        </MainNav>
      </HeaderContainer>
      
      <MobileMenu isOpen={mobileMenuOpen}>
        <CloseBtn onClick={toggleMobileMenu}>
          <FiX />
        </CloseBtn>
        <MobileNavLink href="#home" onClick={toggleMobileMenu}>Home</MobileNavLink>
        <MobileNavLink href="#services" onClick={toggleMobileMenu}>Services</MobileNavLink>
        <MobileNavLink href="#about" onClick={toggleMobileMenu}>About</MobileNavLink>
        <MobileNavLink href="#gallery" onClick={toggleMobileMenu}>Gallery</MobileNavLink>
        <MobileNavLink href="#contact" onClick={toggleMobileMenu}>Contact</MobileNavLink>
        <MobileAppointmentBtn>
          Book Consultation
        </MobileAppointmentBtn>
      </MobileMenu>
    </>
  );
};

export default Header;
