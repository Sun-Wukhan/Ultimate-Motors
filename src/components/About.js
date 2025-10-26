import React from 'react';
import styled from 'styled-components';
import { FiAward, FiUsers, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const AboutSection = styled.section`
  padding: 7.5rem 0;
  background: ${props => props.theme?.background?.primary || 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #1a1a1a 100%)'};
  position: relative;
`;

const Container = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1.25rem;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  margin-bottom: 5rem;
  
  @media (max-width: 60.5rem) {
    grid-template-columns: 1fr;
    gap: 3.125rem;
  }
`;

const TextContent = styled.div``;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${props => `${props.theme?.colors?.primary || '#dc2626'}1a`};
  border: 0.0625rem solid ${props => `${props.theme?.colors?.primary || '#dc2626'}4d`};
  padding: 0.5rem 1rem;
  border-radius: 1.5625rem;
  color: ${props => props.theme?.colors?.primary || '#dc2626'};
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.25rem;
  backdrop-filter: blur(0.625rem);
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  color: ${props => props.theme?.text?.primary || '#fff'};
  margin-bottom: 1.25rem;
  font-weight: 600;
  line-height: 1.2;
  
  .highlight {
    background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme?.text?.secondary || '#ccc'};
  line-height: 1.7;
  margin-bottom: 1.875rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin-bottom: 2.5rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.9375rem;
  color: ${props => props.theme?.text?.primary || '#fff'};
  font-size: 1rem;
  margin-bottom: 0.9375rem;
  
  svg {
    color: ${props => props.theme?.colors?.primary || '#dc2626'};
    font-size: 1.25rem;
    flex-shrink: 0;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
  color: ${props => props.theme?.text?.white || '#fff'};
  border: none;
  padding: 1rem 2rem;
  border-radius: 1.875rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.03125rem;
  
  &:hover {
    transform: translateY(-0.1875rem);
    box-shadow: 0 0.9375rem 2.1875rem rgba(220, 38, 38, 0.4);
  }
`;

const VisualContent = styled.div`
  position: relative;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 25rem;
  background: ${props => props.theme?.background?.secondary || 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)'};
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme?.colors?.primary || '#dc2626'};
  font-size: 1.125rem;
  font-weight: 500;
  border: 0.0625rem solid ${props => `${props.theme?.colors?.primary || '#dc2626'}33`};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, ${props => `${props.theme?.colors?.primary || '#dc2626'}1a`}, transparent);
    animation: shimmer 3s infinite;
  }
  
  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`;

const FloatingCard = styled.div`
  position: absolute;
  background: ${props => `${props.theme?.colors?.primary || '#dc2626'}1a`};
  backdrop-filter: blur(0.625rem);
  border: 0.0625rem solid ${props => `${props.theme?.colors?.primary || '#dc2626'}4d`};
  border-radius: 0.9375rem;
  padding: 1.25rem;
  color: ${props => props.theme?.text?.primary || '#fff'};
  
  &.top-right {
    top: -1.25rem;
    right: -1.25rem;
    text-align: center;
  }
  
  &.bottom-left {
    bottom: -1.25rem;
    left: -1.25rem;
    text-align: center;
  }
  
  @media (max-width: 60.5rem) {
    display: none;
  }
`;

const CardTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme?.colors?.primary || '#dc2626'};
  font-family: 'Playfair Display', serif;
`;

const CardSubtitle = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme?.text?.secondary || '#ccc'};
  text-transform: uppercase;
  letter-spacing: 0.03125rem;
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr));
  gap: 2.5rem;
`;

const StatCard = styled.div`
  background: ${props => props.theme?.background?.card || 'linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, rgba(239, 68, 68, 0.02) 100%)'};
  border: 0.0625rem solid ${props => `${props.theme?.colors?.primary || '#dc2626'}33`};
  border-radius: 1.25rem;
  padding: 2.5rem 1.875rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(0.625rem);
  
  &:hover {
    transform: translateY(-0.3125rem);
    border-color: ${props => `${props.theme?.colors?.primary || '#dc2626'}66`};
    box-shadow: ${props => props.theme?.shadows?.card || '0 0.9375rem 1.875rem rgba(220, 38, 38, 0.1)'};
  }
`;

const StatIcon = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  font-size: 1.5rem;
  color: ${props => props.theme?.text?.white || '#fff'};
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme?.colors?.primary || '#dc2626'};
  font-family: 'Playfair Display', serif;
  margin-bottom: 0.625rem;
`;

const StatLabel = styled.div`
  color: ${props => props.theme?.text?.primary || '#fff'};
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.625rem;
`;

const StatDescription = styled.div`
  color: ${props => props.theme?.text?.secondary || '#ccc'};
  font-size: 0.875rem;
  line-height: 1.5;
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.25rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

/**
 * About section highlighting company expertise and achievements
 * @returns {JSX.Element} The about section
 */
const About = () => {
  const { theme } = useTheme();
  
  const features = [
    "ASE Certified Technicians",
    "State-of-the-Art Diagnostic Equipment",
    "Genuine OEM & Aftermarket Parts",
    "Climate-Controlled Workshop",
    "Direct Insurance Billing",
    "Lifetime Warranty on Workmanship"
  ];

  const stats = [
    {
      icon: <FiAward />,
      number: "15+",
      label: "Years of Excellence",
      description: "Serving luxury car owners with unmatched expertise"
    },
    {
      icon: <FiUsers />,
      number: "500+",
      label: "Satisfied Clients",
      description: "Building lasting relationships through quality service"
    },
    {
      icon: <FiTrendingUp />,
      number: "$50M+",
      label: "Insurance Claims Processed",
      description: "Seamless claims processing and vehicle restoration"
    }
  ];

  return (
    <AboutSection id="about" theme={theme}>
      <Container>
        <AboutContent>
          <TextContent>
            <Badge theme={theme}>
              <FiAward />
              About Ultimate Motors
            </Badge>
            <SectionTitle theme={theme}>
              Where <span className="highlight">Passion</span> Meets 
              <span className="highlight"> Precision</span>
            </SectionTitle>
            <Description theme={theme}>
              For over 15 years, Ultimate Motors has been the trusted destination 
              for comprehensive auto restoration and repair services. Our skilled craftsmen combine 
              traditional techniques with cutting-edge technology to deliver results 
              that exceed expectations.
            </Description>
            <Description theme={theme}>
              We understand that your vehicle is important to you, whether it's your daily driver 
              or a cherished classic. That's why we treat every project with the meticulous 
              care and attention it deserves, and work seamlessly with insurance companies.
            </Description>
            <FeaturesList>
              {features.map((feature, index) => (
                <FeatureItem key={index} theme={theme}>
                  <FiCheckCircle />
                  {feature}
                </FeatureItem>
              ))}
            </FeaturesList>
            <CTAButton theme={theme}>Learn More About Us</CTAButton>
          </TextContent>
          
          <VisualContent>
            <ImagePlaceholder theme={theme}>
              <AboutImage 
                src="/images/about/IMG_7798.jpg" 
                alt="Professional Auto Restoration Facility"
              />
            </ImagePlaceholder>
            <FloatingCard className="top-right" theme={theme}>
              <CardTitle theme={theme}>98%</CardTitle>
              <CardSubtitle theme={theme}>Client Satisfaction</CardSubtitle>
            </FloatingCard>
            <FloatingCard className="bottom-left" theme={theme}>
              <CardTitle theme={theme}>24/7</CardTitle>
              <CardSubtitle theme={theme}>Support Available</CardSubtitle>
            </FloatingCard>
          </VisualContent>
        </AboutContent>
        
        <StatsSection>
          {stats.map((stat, index) => (
            <StatCard key={index} theme={theme}>
              <StatIcon theme={theme}>
                {stat.icon}
              </StatIcon>
              <StatNumber theme={theme}>{stat.number}</StatNumber>
              <StatLabel theme={theme}>{stat.label}</StatLabel>
              <StatDescription theme={theme}>{stat.description}</StatDescription>
            </StatCard>
          ))}
        </StatsSection>
      </Container>
    </AboutSection>
  );
};

export default About;