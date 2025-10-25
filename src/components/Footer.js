import React from 'react';
import styled from 'styled-components';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';

const FooterSection = styled.footer`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  border-top: 1px solid rgba(255, 215, 0, 0.2);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px 40px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const FooterColumn = styled.div``;

const Logo = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  font-weight: 700;
  color: #dc2626;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
  
  span {
    color: #fff;
    font-weight: 300;
  }
`;

const Description = styled.p`
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 30px;
  font-size: 16px;
  
  &.newsletter {
    margin-bottom: 20px;
    font-size: 14px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #ccc;
  font-size: 14px;
  
  svg {
    color: #dc2626;
    font-size: 16px;
    flex-shrink: 0;
  }
`;

const ColumnTitle = styled.h4`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 25px;
  font-family: 'Playfair Display', serif;
`;

const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterLink = styled.li`
  a {
    color: #ccc;
    text-decoration: none;
    font-size: 14px;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      color: #ffd700;
      padding-left: 5px;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dc2626;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(220, 38, 38, 0.3);
  }
`;

const NewsletterSection = styled.div``;

const NewsletterForm = styled.form`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  padding: 12px 20px;
  color: #fff;
  font-size: 14px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &::placeholder {
    color: #999;
  }
  
  &:focus {
    outline: none;
    border-color: #dc2626;
    box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.2);
  }
`;

const NewsletterButton = styled.button`
  background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(220, 38, 38, 0.3);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #999;
  font-size: 14px;
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 600px) {
    gap: 20px;
  }
`;

const BottomLink = styled.a`
  color: #999;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #dc2626;
  }
`;

/**
 * Footer component with company information and links
 * @returns {JSX.Element} The footer component
 */
const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <FooterSection>
      <FooterContent>
        <FooterGrid>
          <FooterColumn>
            <Logo>
              ULTIMATE <span>MOTORS</span>
            </Logo>
            <Description>
              Professional auto restoration and repair services in Toronto. 
              Where precision craftsmanship meets cutting-edge technology for all vehicle types. 
              Insurance claims welcome and direct billing available.
            </Description>
            <ContactInfo>
              <ContactItem>
                <FiMapPin />
                <span>123 King Street West, Toronto, ON M5V 3A8</span>
              </ContactItem>
              <ContactItem>
                <FiPhone />
                <span>(416) 555-MOTORS</span>
              </ContactItem>
              <ContactItem>
                <FiMail />
                <span>info@ultimatemotors.com</span>
              </ContactItem>
            </ContactInfo>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">
                <FiFacebook />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <FiInstagram />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <FiTwitter />
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                <FiLinkedin />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Services</ColumnTitle>
            <FooterLinks>
              <FooterLink><a href="#services">Complete Restoration</a></FooterLink>
              <FooterLink><a href="#services">Collision Repair</a></FooterLink>
              <FooterLink><a href="#services">Paint & Refinishing</a></FooterLink>
              <FooterLink><a href="#services">Mechanical Repairs</a></FooterLink>
              <FooterLink><a href="#services">Insurance Claims</a></FooterLink>
              <FooterLink><a href="#services">Custom Work</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Company</ColumnTitle>
            <FooterLinks>
              <FooterLink><a href="#about">About Us</a></FooterLink>
              <FooterLink><a href="#gallery">Our Work</a></FooterLink>
              <FooterLink><a href="#contact">Contact</a></FooterLink>
              <FooterLink><a href="#">Careers</a></FooterLink>
              <FooterLink><a href="#">Blog</a></FooterLink>
              <FooterLink><a href="#">Testimonials</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <NewsletterSection>
              <ColumnTitle>Stay Updated</ColumnTitle>
              <Description className="newsletter">
                Subscribe to our newsletter for the latest updates on luxury car restoration trends and exclusive offers.
              </Description>
              <NewsletterForm onSubmit={handleNewsletterSubmit}>
                <NewsletterInput
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <NewsletterButton type="submit">
                  Subscribe
                </NewsletterButton>
              </NewsletterForm>
            </NewsletterSection>
          </FooterColumn>
        </FooterGrid>
        
        <FooterBottom>
          <Copyright>
            © 2024 Ultimate Motors. All rights reserved.
          </Copyright>
          <BottomLinks>
            <BottomLink href="#">Privacy Policy</BottomLink>
            <BottomLink href="#">Terms of Service</BottomLink>
            <BottomLink href="#">Cookie Policy</BottomLink>
          </BottomLinks>
        </FooterBottom>
      </FooterContent>
    </FooterSection>
  );
};

export default Footer;
