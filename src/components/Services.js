import React from 'react';
import styled from 'styled-components';
import { FiTool, FiShield, FiZap, FiSettings, FiEye, FiHeart } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const ServicesSection = styled.section`
  padding: 7.5rem 0;
  background: ${props => props.theme?.background?.primary || 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)'};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 0.0625rem;
    background: linear-gradient(90deg, transparent, #ffd700, transparent);
  }
`;

const Container = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1.25rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(220, 38, 38, 0.1);
  border: 0.0625rem solid rgba(220, 38, 38, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 1.5625rem;
  color: #dc2626;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.25rem;
  backdrop-filter: blur(0.625rem);
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  color: #fff;
  margin-bottom: 1.25rem;
  font-weight: 600;
  
  .highlight {
    background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.125rem;
  color: #ccc;
  max-width: 37.5rem;
  margin: 0 auto;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(33.125rem, 1fr));
  gap: 1.875rem;
  margin-bottom: 3.75rem;
`;

const ServiceCard = styled.div`
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, rgba(239, 68, 68, 0.02) 100%);
  border: 0.0625rem solid rgba(220, 38, 38, 0.2);
  border-radius: 1.25rem;
  padding: 2.5rem 1.875rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(0.625rem);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.05), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-0.625rem);
    border-color: rgba(220, 38, 38, 0.4);
    box-shadow: 0 1.25rem 2.5rem rgba(220, 38, 38, 0.1);
    
    &::before {
      left: 100%;
    }
  }
`;

const ServiceIcon = styled.div`
  width: 5rem;
  height: 5rem;
  background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5625rem;
  font-size: 2rem;
  color: #fff;
  transition: all 0.3s ease;
  
  ${ServiceCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.9375rem;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 1.25rem;
`;

const ServicePrice = styled.div`
  color: #dc2626;
  font-size: 1.25rem;
  font-weight: 600;
  font-family: 'Playfair Display', serif;
`;

const SpecialtySection = styled.div`
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%);
  border-radius: 1.25rem;
  padding: 3.125rem;
  text-align: center;
  border: 0.0625rem solid rgba(220, 38, 38, 0.3);
  backdrop-filter: blur(0.625rem);
`;

const SpecialtyTitle = styled.h3`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1.25rem;
  font-weight: 600;
`;

const SpecialtyDescription = styled.p`
  color: #ccc;
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 1.875rem;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
`;

const BrandsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.875rem;
  margin-top: 1.875rem;
`;

const BrandItem = styled.div`
  color: #dc2626;
  font-weight: 600;
  font-size: 1.125rem;
  padding: 0.625rem 1.25rem;
  border: 0.0625rem solid rgba(220, 38, 38, 0.3);
  border-radius: 1.5625rem;
  backdrop-filter: blur(0.625rem);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(220, 38, 38, 0.1);
    transform: translateY(-0.125rem);
  }
`;

const FacilityShowcase = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23.125rem, 1fr));
  gap: 1.25rem;
  margin: 2.5rem 0;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
`;

const ShowcaseImageContainer = styled.div`
  border-radius: 0.9375rem;
  overflow: hidden;
  border: 0.0625rem solid rgba(220, 38, 38, 0.2);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-0.3125rem);
    box-shadow: 0 0.625rem 1.5625rem rgba(220, 38, 38, 0.2);
  }
`;

const ShowcaseImage = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${ShowcaseImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

/**
 * Services section showcasing luxury auto repair services
 * @returns {JSX.Element} The services section
 */
const Services = () => {
  const { theme } = useTheme();
  
  const services = [
    {
      icon: <FiTool />,
      title: "Complete Restoration",
      description: "Full body restoration for all vehicle types with attention to every detail and original specifications.",
      price: "Insurance Claims Welcome"
    },
    {
      icon: <FiShield />,
      title: "Collision Repair",
      description: "Expert collision repair and bodywork for insurance claims and private customers using state-of-the-art equipment.",
      price: "Direct Insurance Billing"
    },
    {
      icon: <FiZap />,
      title: "Paint & Refinishing",
      description: "Professional paint services from touch-ups to complete refinishing for all vehicle makes and models.",
      price: "Free Estimates"
    },
    {
      icon: <FiSettings />,
      title: "Mechanical Repairs",
      description: "Comprehensive mechanical repairs and maintenance services for all vehicle systems and components.",
      price: "Competitive Rates"
    },
    {
      icon: <FiEye />,
      title: "Insurance Claims",
      description: "We work directly with all major insurance companies to streamline your claim process and repairs.",
      price: "No Deductible Options"
    },
    {
      icon: <FiHeart />,
      title: "Custom Work",
      description: "Custom modifications and upgrades tailored to your vision while maintaining safety and reliability.",
      price: "Custom Quotes"
    }
  ];

  const specialtyBrands = [
    "BMW", "Mercedes-Benz", "Audi", "Toyota", "Honda", 
    "Ford", "Chevrolet", "Nissan", "Hyundai", "Volkswagen"
  ];

  return (
    <ServicesSection id="services" theme={theme}>
      <Container>
        <SectionHeader>
          <Badge>
            <FiTool />
            Our Expertise
          </Badge>
          <SectionTitle>
            Comprehensive <span className="highlight">Services</span> for 
            <span className="highlight"> All</span> Vehicles
          </SectionTitle>
          <SectionDescription>
            We provide complete restoration and repair services for all types of vehicles, 
            from luxury cars to everyday drivers. Insurance claims welcome.
          </SectionDescription>
        </SectionHeader>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>
                {service.icon}
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServicePrice>{service.price}</ServicePrice>
            </ServiceCard>
          ))}
        </ServicesGrid>
        
        <SpecialtySection>
          <SpecialtyTitle>All Makes & Models Welcome</SpecialtyTitle>
          <SpecialtyDescription>
            Our certified technicians are experienced in working with all major automotive brands. 
            From routine maintenance to complete restorations and insurance claims, 
            we handle every vehicle with professional care and expertise.
          </SpecialtyDescription>
          
          <FacilityShowcase>
            <ShowcaseImageContainer>
              <ShowcaseImage 
                src="/images/IMG_4818.jpg" 
                alt="Professional Workshop Equipment"
              />
            </ShowcaseImageContainer>
            <ShowcaseImageContainer>
              <ShowcaseImage 
                src="/images/IMG_4820.jpg" 
                alt="Quality Restoration Work"
              />
            </ShowcaseImageContainer>
          </FacilityShowcase>
          
          <BrandsList>
            {specialtyBrands.map((brand, index) => (
              <BrandItem key={index}>{brand}</BrandItem>
            ))}
          </BrandsList>
        </SpecialtySection>
      </Container>
    </ServicesSection>
  );
};

export default Services;
