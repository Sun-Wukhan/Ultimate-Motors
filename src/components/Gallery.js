import React, { useState } from 'react';
import styled from 'styled-components';
import { FiEye, FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const GallerySection = styled.section`
  padding: 7.5rem 0;
  background: ${props => props.theme.background.primary};
  position: relative;
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
  background: ${props => `${props.theme.colors.primary}1A`};
  border: 0.0625rem solid ${props => `${props.theme.colors.primary}4D`};
  padding: 0.5rem 1rem;
  border-radius: 1.5625rem;
  color: ${props => props.theme.colors.primary};
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.25rem;
  backdrop-filter: blur(0.625rem);
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  color: ${props => props.theme.text.primary};
  margin-bottom: 1.25rem;
  font-weight: 600;
  
  .highlight {
    background: ${props => props.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme.text.secondary};
  max-width: 37.5rem;
  margin: 0 auto;
  line-height: 1.6;
`;

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterTab = styled.button`
  background: ${props => props.active ? props.theme.gradients.primary : 'transparent'};
  color: ${props => props.active ? props.theme.text.white : props.theme.text.secondary};
  border: 0.0625rem solid ${props => props.active ? 'transparent' : props.theme.colors.primary};
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.gradients.primary};
    color: ${props => props.theme.text.white};
    transform: translateY(-0.125rem);
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 48rem) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 1rem;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  background: ${props => props.theme.background.secondary};
  box-shadow: ${props => props.theme.shadows.medium};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: ${props => props.theme.shadows.large};
  }
  
  &:hover .overlay {
    opacity: 1;
  }
  
  &:hover .image {
    transform: scale(1.1);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  @media (max-width: 48rem) {
    height: 12rem;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.background.videoOverlay};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const ViewButton = styled.button`
  background: ${props => props.theme.gradients.primary};
  color: ${props => props.theme.text.white};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ImageInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.background.overlay};
  padding: 1rem;
  backdrop-filter: blur(0.625rem);
`;

const ImageTitle = styled.h3`
  color: ${props => props.theme.text.white};
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const ImageCategory = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: 0.875rem;
  font-weight: 500;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 0.5rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -3rem;
  right: 0;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.text.white};
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.text.white};
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-50%) scale(1.1);
  }
  
  &.prev {
    left: -4rem;
  }
  
  &.next {
    right: -4rem;
  }
  
  @media (max-width: 48rem) {
    &.prev {
      left: -2rem;
    }
    
    &.next {
      right: -2rem;
    }
  }
`;

// High-quality car restoration images
const galleryItems = [
  // BMW Work
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "BMW M4 Competition",
    category: "BMW",
    description: "Complete body restoration and paint correction"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "BMW M3 Restoration",
    category: "BMW",
    description: "Insurance claim repair and custom modifications"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "BMW X5 Body Work",
    category: "BMW",
    description: "Collision repair and panel replacement"
  },
  
  // Toyota Supra Work
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Toyota Supra MK5",
    category: "Toyota",
    description: "Performance restoration and custom paint"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Toyota Supra Classic",
    category: "Toyota",
    description: "Complete frame-off restoration"
  },
  
  // Acura/Honda Work
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Acura NSX",
    category: "Acura",
    description: "Precision bodywork and paint matching"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Honda Civic Type R",
    category: "Honda",
    description: "Track-ready restoration and modifications"
  },
  
  // Mercedes Work
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Mercedes-AMG GT",
    category: "Mercedes",
    description: "Luxury vehicle restoration and detailing"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Mercedes C-Class",
    category: "Mercedes",
    description: "Insurance claim and panel repair"
  },
  
  // Porsche Work
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Porsche 911",
    category: "Porsche",
    description: "Classic restoration and modernization"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Porsche Cayman",
    category: "Porsche",
    description: "Performance upgrades and bodywork"
  },
  
  // Local work (using corrected paths)
  {
    id: 12,
    src: "/images/gallery/IMG_4667.jpg",
    title: "Local Project",
    category: "Custom",
    description: "Custom restoration project"
  }
];

const categories = ['All', 'BMW', 'Toyota', 'Acura', 'Honda', 'Mercedes', 'Porsche', 'Custom'];

/**
 * Gallery component showcasing automotive restoration work
 * Features filtering, modal view, and external high-quality images
 */
const Gallery = () => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateModal = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(filteredItems[newIndex]);
  };

  // Close modal on escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') navigateModal('prev');
      if (e.key === 'ArrowRight') navigateModal('next');
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <GallerySection id="gallery" theme={theme}>
      <Container>
        <SectionHeader>
          <Badge theme={theme}>
            <FiEye />
            Our Work
          </Badge>
          <SectionTitle theme={theme}>
            <span className="highlight">Premium</span> Restoration Gallery
          </SectionTitle>
          <SectionDescription theme={theme}>
            Explore our portfolio of expertly restored vehicles, from luxury sports cars 
            to everyday drivers. Each project showcases our commitment to excellence and 
            attention to detail.
          </SectionDescription>
        </SectionHeader>

        <FilterTabs>
          {categories.map(category => (
            <FilterTab
              key={category}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
              theme={theme}
            >
              {category}
            </FilterTab>
          ))}
        </FilterTabs>

        <GalleryGrid>
          {filteredItems.map(item => (
            <GalleryItem key={item.id} onClick={() => openModal(item)} theme={theme}>
              <GalleryImage 
                src={item.src} 
                alt={item.title}
                className="image"
                loading="lazy"
              />
              <ImageOverlay className="overlay" theme={theme}>
                <ViewButton theme={theme}>
                  <FiEye />
                  View Details
                </ViewButton>
              </ImageOverlay>
              <ImageInfo theme={theme}>
                <ImageTitle theme={theme}>{item.title}</ImageTitle>
                <ImageCategory theme={theme}>{item.category}</ImageCategory>
              </ImageInfo>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </Container>

      {selectedImage && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal} theme={theme}>
              <FiX />
            </CloseButton>
            <NavigationButton 
              className="prev" 
              onClick={() => navigateModal('prev')}
              theme={theme}
            >
              <FiArrowLeft />
            </NavigationButton>
            <NavigationButton 
              className="next" 
              onClick={() => navigateModal('next')}
              theme={theme}
            >
              <FiArrowRight />
            </NavigationButton>
            <ModalImage src={selectedImage.src} alt={selectedImage.title} />
          </ModalContent>
        </Modal>
      )}
    </GallerySection>
  );
};

export default Gallery;
