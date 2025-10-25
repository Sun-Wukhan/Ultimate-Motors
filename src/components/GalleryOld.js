import React, { useState } from 'react';
import styled from 'styled-components';
import { FiEye, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const GallerySection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
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

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  color: #fff;
  margin-bottom: 20px;
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
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 
    'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)' : 
    'transparent'};
  color: ${props => props.active ? '#fff' : '#fff'};
  border: ${props => props.active ? 
    'none' : 
    '1px solid rgba(255, 255, 255, 0.3)'};
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    ${props => !props.active && `
      border-color: #dc2626;
      color: #dc2626;
    `}
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const GalleryItem = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
  border: 1px solid rgba(220, 38, 38, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(220, 38, 38, 0.2);
    border-color: rgba(220, 38, 38, 0.4);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dc2626;
  font-size: 16px;
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

const ItemOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
  
  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const ViewButton = styled.button`
  background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ItemInfo = styled.div`
  padding: 25px;
`;

const ItemTitle = styled.h3`
  color: #fff;
  font-size: 1.25rem;
  margin-bottom: 8px;
  font-weight: 600;
`;

const ItemCategory = styled.p`
  color: #dc2626;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
`;

const ItemDescription = styled.p`
  color: #ccc;
  font-size: 14px;
  line-height: 1.5;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${GalleryItem}:hover & {
    transform: scale(1.05);
  }
`;

const ShowcaseSection = styled.div`
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%);
  border-radius: 20px;
  padding: 50px;
  text-align: center;
  border: 1px solid rgba(220, 38, 38, 0.3);
  backdrop-filter: blur(10px);
`;

const ShowcaseTitle = styled.h3`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 20px;
  font-weight: 600;
`;

const ShowcaseDescription = styled.p`
  color: #ccc;
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ShowcaseButton = styled.button`
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

/**
 * Gallery section showcasing completed luxury car projects
 * @returns {JSX.Element} The gallery section
 */
const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Restoration', 'Paint Work', 'Performance', 'Custom'];

  const galleryItems = [
    {
      id: 1,
      title: "Professional Collision Repair",
      category: "Restoration",
      description: "Complete body restoration with precision craftsmanship",
      image: "/images/IMG_4815.jpg"
    },
    {
      id: 2,
      title: "Insurance Claim Repair",
      category: "Performance",
      description: "Expert repair work for insurance claims",
      image: "/images/IMG_4816.jpg"
    },
    {
      id: 3,
      title: "Custom Paint Work",
      category: "Paint Work",
      description: "Professional paint refinishing and color matching",
      image: "/images/IMG_4817.jpg"
    },
    {
      id: 4,
      title: "Mechanical Restoration",
      category: "Custom",
      description: "Complete mechanical overhaul and restoration",
      image: "/images/IMG_4818.jpg"
    },
    {
      id: 5,
      title: "Classic Vehicle Restoration",
      category: "Restoration",
      description: "Bringing classic vehicles back to life",
      image: "/images/IMG_4819.jpg"
    },
    {
      id: 6,
      title: "Quality Workmanship",
      category: "Paint Work",
      description: "Precision bodywork and frame restoration",
      image: "/images/IMG_4821.jpg"
    },
    {
      id: 7,
      title: "Advanced Bodywork",
      category: "Restoration",
      description: "Precision frame and structural repairs",
      image: "/images/gallery/IMG_0986.jpg"
    },
    {
      id: 8,
      title: "Engine Bay Restoration",
      category: "Performance",
      description: "Complete engine compartment restoration",
      image: "/images/gallery/IMG_1598.jpg"
    },
    {
      id: 10,
      title: "Detailed Craftsmanship",
      category: "Paint Work",
      description: "Meticulous attention to detail in every project",
      image: "/images/gallery/IMG_1990.jpg"
    },
    {
      id: 12,
      title: "Precision Tools",
      category: "Performance",
      description: "Professional-grade tools and diagnostics",
      image: "/images/gallery/IMG_4667.jpg"
    },
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <GallerySection id="gallery">
      <Container>
        <SectionHeader>
          <Badge>
            <FiEye />
            Our Portfolio
          </Badge>
          <SectionTitle>
            Masterpiece <span className="highlight">Transformations</span>
          </SectionTitle>
          <SectionDescription>
            Explore our gallery of completed projects showcasing the artistry 
            and precision that goes into every luxury vehicle restoration.
          </SectionDescription>
        </SectionHeader>
        
        <FilterButtons>
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </FilterButton>
          ))}
        </FilterButtons>
        
        <GalleryGrid>
          {filteredItems.map((item) => (
            <GalleryItem key={item.id}>
              <ImagePlaceholder>
                <GalleryImage 
                  src={item.image} 
                  alt={item.title}
                />
              </ImagePlaceholder>
              <ItemOverlay>
                <ViewButton>
                  <FiEye />
                  View Details
                </ViewButton>
              </ItemOverlay>
              <ItemInfo>
                <ItemCategory>{item.category}</ItemCategory>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </ItemInfo>
            </GalleryItem>
          ))}
        </GalleryGrid>
        
        <ShowcaseSection>
          <ShowcaseTitle>Ready to Transform Your Vehicle?</ShowcaseTitle>
          <ShowcaseDescription>
            Join hundreds of satisfied clients who have trusted us with their 
            most prized automotive possessions. Let us bring your vision to life 
            with our unmatched expertise and attention to detail.
          </ShowcaseDescription>
          <ShowcaseButton>Start Your Project</ShowcaseButton>
        </ShowcaseSection>
      </Container>
    </GallerySection>
  );
};

export default Gallery;
