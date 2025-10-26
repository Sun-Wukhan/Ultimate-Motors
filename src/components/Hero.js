import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FiArrowRight, FiStar, FiAward } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(1.875rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.625rem);
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: ${props => props.theme?.background?.primary || '#ffffff'};
  padding-top: 7rem; /* Add space for fixed header */
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
  background: ${props => props.theme?.background?.secondary || '#000'};
  
  &::-webkit-media-controls {
    display: none !important;
  }
  
  @media (max-width: 48rem) {
    object-fit: cover;
    object-position: center;
  }
  
  opacity: 0;
  animation: fadeIn 1s ease-in-out 0.5s forwards;
  
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme?.background?.videoOverlay || 'rgba(0, 0, 0, 0.4)'};
  z-index: 2;
  pointer-events: none;
`;

const FallbackBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme?.gradients?.overlay || 'linear-gradient(135deg, rgba(220, 38, 38, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%)'};
  z-index: -1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 64rem) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  
  @media (max-width: 48rem) {
    padding: 0 1rem;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${props => props.theme?.gradients?.primary || 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)'};
  color: ${props => props.theme?.text?.white || '#ffffff'};
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  box-shadow: ${props => props.theme?.shadows?.glow || '0 0 2rem rgba(220, 38, 38, 0.3)'};
  
  svg {
    font-size: 1rem;
  }
`;

const MainHeading = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  color: ${props => props.theme?.text?.white || '#ffffff'};
  margin-bottom: 1.5rem;
  text-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
  
  @media (max-width: 64rem) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 48rem) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 30rem) {
    font-size: 2rem;
  }
`;

const SubHeading = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme?.text?.white || '#ffffff'};
  margin-bottom: 2rem;
  line-height: 1.6;
  opacity: 0.9;
  text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.5);
  
  @media (max-width: 48rem) {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 48rem) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.button`
  background: ${props => props.theme?.gradients?.primary || 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)'};
  color: ${props => props.theme?.text?.white || '#ffffff'};
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: ${props => props.theme?.shadows?.medium || '0 0.5rem 1rem rgba(0, 0, 0, 0.15)'};
  
  &:hover {
    transform: translateY(-0.125rem);
    box-shadow: ${props => props.theme?.shadows?.glow || '0 0 2rem rgba(220, 38, 38, 0.3)'};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(0.25rem);
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: ${props => props.theme?.text?.white || '#ffffff'};
  border: 0.125rem solid ${props => props.theme.text.white};
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.text.white};
    color: ${props => props.theme.text.primary};
    transform: translateY(-0.125rem);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ImageSection = styled.div`
  position: relative;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`;

const CarShowcase = styled.div`
  position: relative;
  background: ${props => props.theme.background.overlay};
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(0.625rem);
  border: 0.0625rem solid rgba(255, 255, 255, 0.1);
  box-shadow: ${props => props.theme.shadows.large};
  margin-top: 2rem; /* Add space from header */
`;

const CarName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme?.text?.white || '#ffffff'};
  margin-bottom: 0.5rem;
`;

const CarPrice = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme?.colors?.primary || '#dc2626'};
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 48rem) {
    height: 15rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  backdrop-filter: blur(0.625rem);
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme?.colors?.primary || '#dc2626'};
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: ${props => props.theme?.text?.white || '#ffffff'};
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const FloatingIcons = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FloatingIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: ${props => props.theme?.gradients?.primary || 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme?.text?.white || '#ffffff'};
  font-size: 1.125rem;
  animation: ${float} 3s ease-in-out infinite;
  box-shadow: ${props => props.theme?.shadows?.medium || '0 0.5rem 1rem rgba(0, 0, 0, 0.15)'};
  
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  
  &:nth-child(3) {
    animation-delay: 1s;
  }
`;

// High-quality automotive restoration showcase
const carImages = [
  {
    src: "https://ww2.pca.org/media/sites/default/files/u/GT2RS-Front-Roller-DPetlakh.jpg",
    name: "Insurance Jobs",
    price: "Premium Restoration",
    alt: "Restorations of all Builds and Brands"
  },
  {
    src: "https://toyotacanada.scene7.com/is/image/toyotacanada/lexus-2026-lc-500-convertible-hero-ultra-white-l?fit=constrain&wid=2200",
    name: "Custom Jobs",
    price: "Complete Overhaul",
    alt: "Performance Vehicle / Tune and Build"
  },
  {
    src: "https://live.staticflickr.com/4350/37119662395_2cab6542a0_b.jpg",
    name: "Insurane Claims",
    price: "We deal with ALL major Insurance Companies",
    alt: "Restore Your Car to its Original Condition"
  }
];

/**
 * Hero section component showcasing automotive services
 * Features video background, theme support, and responsive design
 * @returns {JSX.Element} The hero section
 */
const Hero = () => {
  const { theme } = useTheme();
  const [currentCar, setCurrentCar] = React.useState(0);

  // Auto-rotate car showcase
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCar(prev => (prev + 1) % carImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentCarData = carImages[currentCar];

  return (
    <HeroSection id="home" theme={theme}>
      <FallbackBackground theme={theme} />
      
      <VideoBackground
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      >
        <source src="/images/hero/hero-video-hq.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      
      <VideoOverlay theme={theme} />
      
      <HeroContent>
        <TextContent>
          <Badge theme={theme}>
            <FiAward />
            Premium Auto Body Services
          </Badge>
          
          <MainHeading theme={theme}>
            Ultimate Motors
            <br />
            <span style={{ color: theme.colors.primary }}>Restoration</span>
          </MainHeading>
          
          <SubHeading theme={theme}>
            Professional auto body repair, restoration, wrap and mechanical services for all vehicle types. 
            From luxury cars to everyday vehicles, we handle insurance claims and 
            complete restorations with precision and care.
          </SubHeading>
          
          <ButtonGroup>
            <PrimaryButton theme={theme}>
              Get Free Quote
              <FiArrowRight />
            </PrimaryButton>
            <SecondaryButton theme={theme}>
              View Gallery
            </SecondaryButton>
          </ButtonGroup>
        </TextContent>
        
        <ImageSection>
          <CarShowcase theme={theme}>
            <FloatingIcons>
              <FloatingIcon theme={theme}>
                <FiStar />
              </FloatingIcon>
              <FloatingIcon theme={theme}>
                <FiAward />
              </FloatingIcon>
            </FloatingIcons>
            
            <CarName theme={theme}>{currentCarData.name}</CarName>
            <CarPrice theme={theme}>{currentCarData.price}</CarPrice>
            
            <HeroImage 
              src={currentCarData.src} 
              alt={currentCarData.alt}
              loading="lazy"
            />
            
            <StatsGrid>
              <StatItem>
                <StatNumber theme={theme}>15+</StatNumber>
                <StatLabel theme={theme}>Years Experience</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber theme={theme}>2000+</StatNumber>
                <StatLabel theme={theme}>Cars Restored</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber theme={theme}>100%</StatNumber>
                <StatLabel theme={theme}>Satisfaction</StatLabel>
              </StatItem>
            </StatsGrid>
          </CarShowcase>
        </ImageSection>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
