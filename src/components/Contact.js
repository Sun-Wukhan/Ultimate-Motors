import React, { useState } from 'react';
import styled from 'styled-components';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

const ContactSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #1a1a1a 100%);
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

const ContactInfo = styled.div``;

const InfoTitle = styled.h3`
  font-size: 1.75rem;
  color: #fff;
  margin-bottom: 30px;
  font-weight: 600;
`;

const InfoGrid = styled.div`
  display: grid;
  gap: 30px;
  margin-bottom: 40px;
`;

const InfoCard = styled.div`
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, rgba(239, 68, 68, 0.02) 100%);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 15px;
  padding: 25px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(220, 38, 38, 0.4);
    box-shadow: 0 10px 25px rgba(220, 38, 38, 0.1);
  }
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 20px;
  color: #fff;
`;

const InfoLabel = styled.h4`
  color: #fff;
  font-size: 1.125rem;
  margin-bottom: 8px;
  font-weight: 600;
`;

const InfoText = styled.p`
  color: #ccc;
  line-height: 1.5;
  white-space: pre-line;
`;

const ContactForm = styled.form`
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, rgba(239, 68, 68, 0.02) 100%);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
`;

const FormTitle = styled.h3`
  font-size: 1.75rem;
  color: #fff;
  margin-bottom: 30px;
  font-weight: 600;
  text-align: center;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  
  &.full-width {
    grid-column: 1 / -1;
  }
`;

const FormLabel = styled.label`
  display: block;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FormInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 15px;
  color: #fff;
  font-size: 16px;
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

const FormTextarea = styled.textarea`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 15px;
  color: #fff;
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  font-family: inherit;
  
  &::placeholder {
    color: #999;
  }
  
  &:focus {
    outline: none;
    border-color: #dc2626;
    box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.2);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 15px;
  color: #fff;
  font-size: 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #dc2626;
    box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.2);
  }
  
  option {
    background: #1a1a1a;
    color: #fff;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
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
  justify-content: center;
  gap: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(220, 38, 38, 0.4);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

/**
 * Contact section with contact information and inquiry form
 * @returns {JSX.Element} The contact section
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    vehicleMake: '',
    vehicleModel: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  const contactInfo = [
    {
      icon: <FiPhone />,
      label: "Phone",
      text: "(416) 555-MOTORS\n(416) 555-6687"
    },
    {
      icon: <FiMail />,
      label: "Email",
      text: "info@ultimatemotors.com\nconsultation@ultimatemotors.com"
    },
    {
      icon: <FiMapPin />,
      label: "Location",
      text: "123 King Street West\nToronto, ON M5V 3A8"
    },
    {
      icon: <FiClock />,
      label: "Hours",
      text: "Mon-Fri: 8:00AM - 6:00PM\nSat: 9:00AM - 4:00PM\nSun: By Appointment"
    }
  ];

  return (
    <ContactSection id="contact">
      <Container>
        <SectionHeader>
          <Badge>
            <FiMessageSquare />
            Get In Touch
          </Badge>
          <SectionTitle>
            Start Your <span className="highlight">Restoration</span> Experience
          </SectionTitle>
          <SectionDescription>
            Ready to restore your vehicle? Contact our expert team for a 
            personalized consultation and detailed estimate. Insurance claims welcome.
          </SectionDescription>
        </SectionHeader>
        
        <ContactContent>
          <ContactInfo>
            <InfoTitle>Contact Information</InfoTitle>
            <InfoGrid>
              {contactInfo.map((info, index) => (
                <InfoCard key={index}>
                  <InfoIcon>
                    {info.icon}
                  </InfoIcon>
                  <InfoLabel>{info.label}</InfoLabel>
                  <InfoText>
                    {info.text}
                  </InfoText>
                </InfoCard>
              ))}
            </InfoGrid>
          </ContactInfo>
          
          <ContactForm onSubmit={handleSubmit}>
            <FormTitle>Request Consultation</FormTitle>
            
            <FormGrid>
              <FormGroup>
                <FormLabel>First Name *</FormLabel>
                <FormInput
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Last Name *</FormLabel>
                <FormInput
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  required
                />
              </FormGroup>
            </FormGrid>
            
            <FormGrid>
              <FormGroup>
                <FormLabel>Email *</FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Phone</FormLabel>
                <FormInput
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(310) 555-0123"
                />
              </FormGroup>
            </FormGrid>
            
            <FormGroup>
              <FormLabel>Service Needed *</FormLabel>
              <FormSelect
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a service</option>
                <option value="restoration">Complete Restoration</option>
                <option value="collision">Collision Repair</option>
                <option value="paint">Paint & Refinishing</option>
                <option value="mechanical">Mechanical Repairs</option>
                <option value="insurance">Insurance Claim</option>
                <option value="consultation">General Consultation</option>
              </FormSelect>
            </FormGroup>
            
            <FormGrid>
              <FormGroup>
                <FormLabel>Vehicle Make</FormLabel>
                <FormInput
                  type="text"
                  name="vehicleMake"
                  value={formData.vehicleMake}
                  onChange={handleInputChange}
                  placeholder="Toyota, Honda, BMW, etc."
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Vehicle Model</FormLabel>
                <FormInput
                  type="text"
                  name="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={handleInputChange}
                  placeholder="Camry, Accord, 3 Series, etc."
                />
              </FormGroup>
            </FormGrid>
            
            <FormGroup className="full-width">
              <FormLabel>Project Details</FormLabel>
              <FormTextarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please describe your repair needs, insurance claim details, timeline, and any specific requirements..."
              />
            </FormGroup>
            
            <SubmitButton type="submit">
              <FiSend />
              Send Inquiry
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact;
