import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FiArrowRight, FiStar, FiAward } from 'react-icons/fi';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  background: #000;
  
  /* Ensure video loads and displays */
  &::-webkit-media-controls {
    display: none !important;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 2;
  pointer-events: none;
`;

const FallbackBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(10, 10, 10, 0.9) 0%,
    rgba(20, 20, 20, 0.8) 50%,
    rgba(10, 10, 10, 0.9) 100%
  ),
  url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="%23333" stroke-width="1" opacity="0.3"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>');
  background-size: cover;
  background-position: center;
  z-index: -3;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 10;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const TextContent = styled.div`
  animation: ${fadeInUp} 1s ease-out;
`;

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

const MainHeading = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 20px;
  
  .highlight {
    background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const SubHeading = styled.p`
  font-size: 1.25rem;
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 500px;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
  color: #fff;
  border: none;
  padding: 16px 32px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(220, 38, 38, 0.4);
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 14px 30px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    border-color: #dc2626;
    color: #dc2626;
    transform: translateY(-2px);
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 40px;
  
  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const StatItem = styled.div`
  text-align: left;
  
  @media (max-width: 968px) {
    text-align: center;
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #dc2626;
  font-family: 'Playfair Display', serif;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #ccc;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const VisualContent = styled.div`
  position: relative;
  animation: ${fadeInUp} 1s ease-out 0.3s both;
`;

const CarShowcase = styled.div`
  position: relative;
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(220, 38, 38, 0.2);
  animation: ${float} 6s ease-in-out infinite;
`;

const CarImage = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dc2626;
  font-size: 18px;
  font-weight: 500;
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

const CarDetails = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const CarName = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const CarPrice = styled.p`
  color: #dc2626;
  font-size: 1.25rem;
  font-weight: 600;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 20%;
  right: 10%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 968px) {
    display: none;
  }
`;

const FloatingCard = styled.div`
  background: rgba(220, 38, 38, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 15px;
  padding: 15px;
  color: #fff;
  font-size: 14px;
  animation: ${float} 4s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;
  
  ${CarShowcase}:hover & {
    transform: scale(1.02);
  }
`;

const FloatingIcon = styled.div`
  margin-bottom: 5px;
`;

/**
 * Hero section component showcasing luxury car services
 * @returns {JSX.Element} The hero section
 */
const Hero = () => {
  return (
    <HeroSection id="home">
      {/* Fallback background */}
      <FallbackBackground />
      
      {/* Video will be added after deployment via hosting provider */}
      {/* 
      <VideoBackground
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      >
        <source src="/images/hero/b371e117a3084b34968a0b6ad3fadf03.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      */}
      
      <VideoOverlay />
      
      
      <HeroContent>
        <TextContent>
          <Badge>
            <FiAward />
            Professional Auto Restoration Services
          </Badge>
          
          <MainHeading>
            Expert <span className="highlight">Restoration</span> for 
            <span className="highlight"> All</span> Vehicles
          </MainHeading>
          
          <SubHeading>
            From luxury cars to everyday vehicles, we provide comprehensive restoration 
            services and work with all major insurance companies. Where craftsmanship meets cutting-edge technology.
          </SubHeading>
          
          <CTAButtons>
            <PrimaryButton>
              Schedule Consultation
              <FiArrowRight />
            </PrimaryButton>
            <SecondaryButton>
              View Our Work
            </SecondaryButton>
          </CTAButtons>
          
          <Stats>
            <StatItem>
              <StatNumber>15+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>500+</StatNumber>
              <StatLabel>Vehicles Restored</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>98%</StatNumber>
              <StatLabel>Client Satisfaction</StatLabel>
            </StatItem>
          </Stats>
        </TextContent>
        
        <VisualContent>
          <CarShowcase>
            <CarImage>
              <HeroImage 
                src="/images/IMG_4814.jpg" 
                alt="Professional Auto Restoration"
              />
            </CarImage>
            <CarDetails>
              <CarName>Professional Restoration</CarName>
              <CarPrice>Insurance Claims Welcome - Free Estimates</CarPrice>
            </CarDetails>
          </CarShowcase>
        </VisualContent>
      </HeroContent>
      
      <FloatingElements>
        <FloatingCard delay="0s">
          <FloatingIcon>
            <FiStar />
          </FloatingIcon>
          5-Star Rating
        </FloatingCard>
        <FloatingCard delay="1s">
          <FloatingIcon>
            <FiAward />
          </FloatingIcon>
          Certified Technicians
        </FloatingCard>
      </FloatingElements>
    </HeroSection>
  );
};

export default Hero;
