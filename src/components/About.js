import React from 'react';
import styled from 'styled-components';
import { FiAward, FiUsers, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';

const AboutSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #1a1a1a 100%);
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin-bottom: 80px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

const TextContent = styled.div``;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.3);
  padding: 8px 16px;
  border-radius: 25px;
  color: #dc2626;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  color: #fff;
  margin-bottom: 20px;
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
  color: #ccc;
  line-height: 1.7;
  margin-bottom: 30px;
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin-bottom: 40px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #fff;
  font-size: 1rem;
  margin-bottom: 15px;
  
  svg {
    color: #dc2626;
    font-size: 20px;
    flex-shrink: 0;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
  color: #fff;
  border: none;
  padding: 16px 32px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(220, 38, 38, 0.4);
  }
`;

const VisualContent = styled.div`
  position: relative;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dc2626;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid rgba(220, 38, 38, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.1), transparent);
    animation: shimmer 3s infinite;
  }
  
  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`;

const FloatingCard = styled.div`
  position: absolute;
  background: rgba(220, 38, 38, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(220, 38, 38, 0.3);
  border-radius: 15px;
  padding: 20px;
  color: #fff;
  
  &.top-right {
    top: -20px;
    right: -20px;
    text-align: center;
  }
  
  &.bottom-left {
    bottom: -20px;
    left: -20px;
    text-align: center;
  }
  
  @media (max-width: 968px) {
    display: none;
  }
`;

const CardTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #dc2626;
  font-family: 'Playfair Display', serif;
`;

const CardSubtitle = styled.div`
  font-size: 14px;
  color: #ccc;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

const StatCard = styled.div`
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, rgba(239, 68, 68, 0.02) 100%);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(220, 38, 38, 0.4);
    box-shadow: 0 15px 30px rgba(220, 38, 38, 0.1);
  }
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 24px;
  color: #fff;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #dc2626;
  font-family: 'Playfair Display', serif;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  color: #fff;
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

const StatDescription = styled.div`
  color: #ccc;
  font-size: 14px;
  line-height: 1.5;
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
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
    <AboutSection id="about">
      <Container>
        <AboutContent>
          <TextContent>
            <Badge>
              <FiAward />
              About Ultimate Motors
            </Badge>
            <SectionTitle>
              Where <span className="highlight">Passion</span> Meets 
              <span className="highlight"> Precision</span>
            </SectionTitle>
            <Description>
              For over 15 years, Ultimate Motors has been the trusted destination 
              for comprehensive auto restoration and repair services. Our skilled craftsmen combine 
              traditional techniques with cutting-edge technology to deliver results 
              that exceed expectations.
            </Description>
            <Description>
              We understand that your vehicle is important to you, whether it's your daily driver 
              or a cherished classic. That's why we treat every project with the meticulous 
              care and attention it deserves, and work seamlessly with insurance companies.
            </Description>
            <FeaturesList>
              {features.map((feature, index) => (
                <FeatureItem key={index}>
                  <FiCheckCircle />
                  {feature}
                </FeatureItem>
              ))}
            </FeaturesList>
            <CTAButton>Learn More About Us</CTAButton>
          </TextContent>
          
          <VisualContent>
            <ImagePlaceholder>
              <AboutImage 
                src="/images/about/IMG_7798.jpg" 
                alt="Professional Auto Restoration Facility"
              />
            </ImagePlaceholder>
            <FloatingCard className="top-right">
              <CardTitle>98%</CardTitle>
              <CardSubtitle>Client Satisfaction</CardSubtitle>
            </FloatingCard>
            <FloatingCard className="bottom-left">
              <CardTitle>24/7</CardTitle>
              <CardSubtitle>Support Available</CardSubtitle>
            </FloatingCard>
          </VisualContent>
        </AboutContent>
        
        <StatsSection>
          {stats.map((stat, index) => (
            <StatCard key={index}>
              <StatIcon>
                {stat.icon}
              </StatIcon>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
              <StatDescription>{stat.description}</StatDescription>
            </StatCard>
          ))}
        </StatsSection>
      </Container>
    </AboutSection>
  );
};

export default About;
