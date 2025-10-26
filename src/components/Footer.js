import React from 'react';
import styled from 'styled-components';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const FooterSection = styled.footer`
  background: ${props => props.theme?.background?.primary || 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'};
  border-top: 0.0625rem solid ${props => `${props.theme?.colors?.primary || '#dc2626'}33`};
`;

const FooterContent = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 5rem 1.25rem 2.5rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3.75rem;
  margin-bottom: 3.75rem;
  
  @media (max-width: 60.5rem) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
  
  @media (max-width: 37.5rem) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
`;

const FooterColumn = styled.div``;

const Logo = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme?.colors?.primary || '#dc2626'};
  margin-bottom: 1.25rem;
  letter-spacing: -0.03125rem;
  
  span {
    color: ${props => props.theme?.text?.primary || '#fff'};
    font-weight: 300;
  }
`;

const Description = styled.p`
  color: ${props => props.theme?.text?.secondary || '#ccc'};
  line-height: 1.6;
  margin-bottom: 1.875rem;
  font-size: 1rem;
  
  &.newsletter {
    margin-bottom: 1.25rem;
    font-size: 0.875rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${props => props.theme?.text?.secondary || '#ccc'};
  font-size: 0.875rem;
  
  svg {
    color: ${props => props.theme?.colors?.primary || '#dc2626'};
    font-size: 1rem;
    flex-shrink: 0;
  }
`;

const ColumnTitle = styled.h4`
  color: ${props => props.theme?.text?.primary || '#fff'};
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5625rem;
  font-family: 'Playfair Display', serif;
`;

const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled.li`
  a {
    color: ${props => props.theme?.text?.secondary || '#ccc'};
    text-decoration: none;
    font-size: 0.875rem;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      color: ${props => props.theme?.colors?.primary || '#dc2626'};
      padding-left: 0.3125rem;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.9375rem;
  margin-top: 1.25rem;
  
  @media (max-width: 37.5rem) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  background: ${props => `${props.theme?.colors?.primary || '#dc2626'}1a`};
  border: 0.0625rem solid ${props => `${props.theme?.colors?.primary || '#dc2626'}4d`};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme?.colors?.primary || '#dc2626'};
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(0.625rem);
  
  &:hover {
    background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
    color: ${props => props.theme?.text?.white || '#fff'};
    transform: translateY(-0.125rem);
    box-shadow: 0 0.3125rem 0.9375rem rgba(220, 38, 38, 0.3);
  }
`;

const NewsletterSection = styled.div``;

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.625rem;
  margin-top: 1.25rem;
  
  @media (max-width: 37.5rem) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  background: ${props => props.theme?.background?.input || 'rgba(255, 255, 255, 0.05)'};
  border: 0.0625rem solid ${props => props.theme?.colors?.border || 'rgba(255, 255, 255, 0.2)'};
  border-radius: 1.5625rem;
  padding: 0.75rem 1.25rem;
  color: ${props => props.theme?.text?.primary || '#fff'};
  font-size: 0.875rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(0.625rem);
  
  &::placeholder {
    color: ${props => props.theme?.text?.placeholder || '#999'};
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme?.colors?.primary || '#dc2626'};
    box-shadow: 0 0 0 0.125rem ${props => `${props.theme?.colors?.primary || '#dc2626'}33`};
  }
`;

const NewsletterButton = styled.button`
  background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
  color: ${props => props.theme?.text?.white || '#fff'};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 1.5625rem;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-0.125rem);
    box-shadow: 0 0.3125rem 0.9375rem rgba(220, 38, 38, 0.3);
  }
`;

const FooterBottom = styled.div`
  border-top: 0.0625rem solid ${props => props.theme?.colors?.border || 'rgba(255, 255, 255, 0.1)'};
  padding-top: 1.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 37.5rem) {
    flex-direction: column;
    gap: 1.25rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme?.text?.placeholder || '#999'};
  font-size: 0.875rem;
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 1.875rem;
  
  @media (max-width: 37.5rem) {
    gap: 1.25rem;
  }
`;

const BottomLink = styled.a`
  color: ${props => props.theme?.text?.placeholder || '#999'};
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme?.colors?.primary || '#dc2626'};
  }
`;

/**
 * Footer component with company information and links
 * @returns {JSX.Element} The footer component
 */
const Footer = () => {
  const { theme } = useTheme();
  
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <FooterSection theme={theme}>
      <FooterContent>
        <FooterGrid>
          <FooterColumn>
            <Logo theme={theme}>
              ULTIMATE <span>MOTORS</span>
            </Logo>
            <Description theme={theme}>
              Professional auto restoration and repair services in Toronto. 
              Where precision craftsmanship meets cutting-edge technology for all vehicle types. 
              Insurance claims welcome and direct billing available.
            </Description>
            <ContactInfo>
              <ContactItem theme={theme}>
                <FiMapPin />
                <span>21 Bertrand Avenue, Toronto, ON M1L 2P3</span>
              </ContactItem>
              <ContactItem theme={theme}>
                <FiPhone />
                <span>(416) 500-0097</span>
              </ContactItem>
              <ContactItem theme={theme}>
                <FiMail />
                <span>info@ultimate-motors.ca</span>
              </ContactItem>
            </ContactInfo>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook" theme={theme}>
                <FiFacebook />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram" theme={theme}>
                <FiInstagram />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter" theme={theme}>
                <FiTwitter />
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn" theme={theme}>
                <FiLinkedin />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle theme={theme}>Services</ColumnTitle>
            <FooterLinks>
              <FooterLink theme={theme}><a href="#services">Complete Restoration</a></FooterLink>
              <FooterLink theme={theme}><a href="#services">Collision Repair</a></FooterLink>
              <FooterLink theme={theme}><a href="#services">Paint & Refinishing</a></FooterLink>
              <FooterLink theme={theme}><a href="#services">Mechanical Repairs</a></FooterLink>
              <FooterLink theme={theme}><a href="#services">Insurance Claims</a></FooterLink>
              <FooterLink theme={theme}><a href="#services">Custom Work</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle theme={theme}>Company</ColumnTitle>
            <FooterLinks>
              <FooterLink theme={theme}><a href="#about">About Us</a></FooterLink>
              <FooterLink theme={theme}><a href="#gallery">Our Work</a></FooterLink>
              <FooterLink theme={theme}><a href="#contact">Contact</a></FooterLink>
              <FooterLink theme={theme}><a href="#">Careers</a></FooterLink>
              <FooterLink theme={theme}><a href="#">Blog</a></FooterLink>
              <FooterLink theme={theme}><a href="#">Testimonials</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <NewsletterSection>
              <ColumnTitle theme={theme}>Stay Updated</ColumnTitle>
              <Description className="newsletter" theme={theme}>
                Subscribe to our newsletter for the latest updates on luxury car restoration trends and exclusive offers.
              </Description>
              <NewsletterForm onSubmit={handleNewsletterSubmit}>
                <NewsletterInput
                  theme={theme}
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <NewsletterButton type="submit" theme={theme}>
                  Subscribe
                </NewsletterButton>
              </NewsletterForm>
            </NewsletterSection>
          </FooterColumn>
        </FooterGrid>
        
        <FooterBottom theme={theme}>
          <Copyright theme={theme}>
            © 2024 Ultimate Motors. All rights reserved.
          </Copyright>
          <BottomLinks>
            <BottomLink href="#" theme={theme}>Privacy Policy</BottomLink>
            <BottomLink href="#" theme={theme}>Terms of Service</BottomLink>
            <BottomLink href="#" theme={theme}>Cookie Policy</BottomLink>
          </BottomLinks>
        </FooterBottom>
      </FooterContent>
    </FooterSection>
  );
};

export default Footer;