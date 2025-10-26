import React, { useState } from 'react';
import styled from 'styled-components';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiUser, FiMessageSquare, FiCheck, FiX } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

const ContactSection = styled.section`
  padding: 7.5rem 0;
  background: ${props => props.theme?.background?.primary || 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #1a1a1a 100%)'};
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
  
  .highlight {
    background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme?.text?.secondary || '#ccc'};
  max-width: 37.5rem;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
  
  @media (max-width: 60.5rem) {
    grid-template-columns: 1fr;
    gap: 3.125rem;
  }
`;

const ContactInfo = styled.div``;

const InfoTitle = styled.h3`
  font-size: 1.75rem;
  color: ${props => props.theme?.text?.primary || '#fff'};
  margin-bottom: 1.875rem;
  font-weight: 600;
`;

const InfoGrid = styled.div`
  display: grid;
  gap: 1.875rem;
  margin-bottom: 2.5rem;
`;

const InfoCard = styled.div`
  background: ${props => props.theme?.background?.card || 'linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, rgba(239, 68, 68, 0.02) 100%)'};
  border: 0.0625rem solid ${props => `${props.theme?.colors?.primary || '#dc2626'}33`};
  border-radius: 0.9375rem;
  padding: 1.5625rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(0.625rem);
  
  &:hover {
    transform: translateY(-0.3125rem);
    border-color: ${props => `${props.theme?.colors?.primary || '#dc2626'}66`};
    box-shadow: ${props => props.theme?.shadows?.card || '0 0.625rem 1.5625rem rgba(220, 38, 38, 0.1)'};
  }
`;

const InfoIcon = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.9375rem;
  font-size: 1.25rem;
  color: ${props => props.theme?.text?.white || '#fff'};
`;

const InfoLabel = styled.h4`
  color: ${props => props.theme?.text?.primary || '#fff'};
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const InfoText = styled.p`
  color: ${props => props.theme?.text?.secondary || '#ccc'};
  line-height: 1.5;
  white-space: pre-line;
`;

const ContactForm = styled.form`
  background: ${props => props.theme?.background?.card || 'linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, rgba(239, 68, 68, 0.02) 100%)'};
  border: 0.0625rem solid ${props => `${props.theme?.colors?.primary || '#dc2626'}33`};
  border-radius: 1.25rem;
  padding: 2.5rem;
  backdrop-filter: blur(0.625rem);
`;

const FormTitle = styled.h3`
  font-size: 1.75rem;
  color: ${props => props.theme?.text?.primary || '#fff'};
  margin-bottom: 1.875rem;
  font-weight: 600;
  text-align: center;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
  
  @media (max-width: 37.5rem) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.25rem;
  
  &.full-width {
    grid-column: 1 / -1;
  }
`;

const FormLabel = styled.label`
  display: block;
  color: ${props => props.theme?.text?.primary || '#fff'};
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.03125rem;
`;

const FormInput = styled.input`
  width: 100%;
  background: ${props => props.theme?.background?.input || 'rgba(255, 255, 255, 0.05)'};
  border: 0.0625rem solid ${props => props.theme?.colors?.border || 'rgba(255, 255, 255, 0.2)'};
  border-radius: 0.625rem;
  padding: 0.9375rem;
  color: ${props => props.theme?.text?.primary || '#fff'};
  font-size: 1rem;
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

const FormTextarea = styled.textarea`
  width: 100%;
  background: ${props => props.theme?.background?.input || 'rgba(255, 255, 255, 0.05)'};
  border: 0.0625rem solid ${props => props.theme?.colors?.border || 'rgba(255, 255, 255, 0.2)'};
  border-radius: 0.625rem;
  padding: 0.9375rem;
  color: ${props => props.theme?.text?.primary || '#fff'};
  font-size: 1rem;
  min-height: 7.5rem;
  resize: vertical;
  transition: all 0.3s ease;
  backdrop-filter: blur(0.625rem);
  font-family: inherit;
  
  &::placeholder {
    color: ${props => props.theme?.text?.placeholder || '#999'};
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme?.colors?.primary || '#dc2626'};
    box-shadow: 0 0 0 0.125rem ${props => `${props.theme?.colors?.primary || '#dc2626'}33`};
  }
`;

const FormSelect = styled.select`
  width: 100%;
  background: ${props => props.theme?.background?.input || 'rgba(255, 255, 255, 0.05)'};
  border: 0.0625rem solid ${props => props.theme?.colors?.border || 'rgba(255, 255, 255, 0.2)'};
  border-radius: 0.625rem;
  padding: 0.9375rem;
  color: ${props => props.theme?.text?.primary || '#fff'};
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(0.625rem);
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme?.colors?.primary || '#dc2626'};
    box-shadow: 0 0 0 0.125rem ${props => `${props.theme?.colors?.primary || '#dc2626'}33`};
  }
  
  option {
    background: ${props => props.theme?.background?.dropdown || '#1a1a1a'};
    color: ${props => props.theme?.text?.primary || '#fff'};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: ${props => props.$isLoading ? 
    'linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)' : 
    'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)'};
  color: ${props => props.theme?.text?.white || '#fff'};
  border: none;
  padding: 1rem 2rem;
  border-radius: 1.875rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: ${props => props.$isLoading ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.03125rem;
  
  &:hover {
    transform: ${props => props.$isLoading ? 'none' : 'translateY(-0.125rem)'};
    box-shadow: ${props => props.$isLoading ? 'none' : '0 0.625rem 1.5625rem rgba(220, 38, 38, 0.4)'};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const StatusMessage = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  
  &.success {
    background: ${props => props.theme?.colors?.success || '#10b981'}1a;
    border: 0.0625rem solid ${props => props.theme?.colors?.success || '#10b981'}33;
    color: ${props => props.theme?.colors?.success || '#10b981'};
  }
  
  &.error {
    background: ${props => props.theme?.colors?.danger || '#ef4444'}1a;
    border: 0.0625rem solid ${props => props.theme?.colors?.danger || '#ef4444'}33;
    color: ${props => props.theme?.colors?.danger || '#ef4444'};
  }
`;

/**
 * Contact section with contact information and inquiry form
 * @returns {JSX.Element} The contact section
 */
const Contact = () => {
  const { theme } = useTheme();
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
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init(emailjsConfig.publicKey);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear status when user starts typing
    if (status.message) {
      setStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Prepare template parameters to match your EmailJS template
      const now = new Date();
      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        service_needed: formData.service,
        vehicle_make: formData.vehicleMake || 'Not specified',
        vehicle_model: formData.vehicleModel || 'Not specified',
        project_details: formData.message,
        send_date: now.toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        send_time: now.toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          timeZoneName: 'short'
        }),
        to_name: 'Ultimate Motors Team',
        reply_to: formData.email
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      console.log('Email sent successfully:', result);
      
      // Show success message
      setStatus({
        type: 'success',
        message: 'Thank you for your inquiry! We will contact you within 24 hours.'
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        vehicleMake: '',
        vehicleModel: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiPhone />,
      label: "Phone",
      text: "(416)-500-0097"
    },
    {
      icon: <FiMail />,
      label: "Email",
      text: "info@ultimate-motors.com"
    },
    {
      icon: <FiMapPin />,
      label: "Location",
      text: "21 Bertrand Avenue\nToronto, ON M1L 2P3"
    },
    {
      icon: <FiClock />,
      label: "Hours",
      text: "Mon-Fri: 8:00AM - 6:00PM\nSat: 9:00AM - 4:00PM\nSun: By Appointment"
    }
  ];

  return (
    <ContactSection id="contact" theme={theme}>
      <Container>
        <SectionHeader>
          <Badge theme={theme}>
            <FiMessageSquare />
            Get In Touch
          </Badge>
          <SectionTitle theme={theme}>
            Start Your <span className="highlight">Restoration</span> Experience
          </SectionTitle>
          <SectionDescription theme={theme}>
            Ready to restore your vehicle? Contact our expert team for a 
            personalized consultation and detailed estimate. Insurance claims welcome.
          </SectionDescription>
        </SectionHeader>
        
        <ContactContent>
          <ContactInfo>
            <InfoTitle theme={theme}>Contact Information</InfoTitle>
            <InfoGrid>
              {contactInfo.map((info, index) => (
                <InfoCard key={index} theme={theme}>
                  <InfoIcon theme={theme}>
                    {info.icon}
                  </InfoIcon>
                  <InfoLabel theme={theme}>{info.label}</InfoLabel>
                  <InfoText theme={theme}>
                    {info.text}
                  </InfoText>
                </InfoCard>
              ))}
            </InfoGrid>
          </ContactInfo>
          
          <ContactForm onSubmit={handleSubmit} theme={theme}>
            <FormTitle theme={theme}>Request Consultation</FormTitle>
            
            <FormGrid>
              <FormGroup>
                <FormLabel theme={theme}>First Name *</FormLabel>
                <FormInput
                  theme={theme}
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel theme={theme}>Last Name *</FormLabel>
                <FormInput
                  theme={theme}
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
                <FormLabel theme={theme}>Email *</FormLabel>
                <FormInput
                  theme={theme}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel theme={theme}>Phone</FormLabel>
                <FormInput
                  theme={theme}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(310) 555-0123"
                />
              </FormGroup>
            </FormGrid>
            
            <FormGroup>
              <FormLabel theme={theme}>Service Needed *</FormLabel>
              <FormSelect
                theme={theme}
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
                <FormLabel theme={theme}>Vehicle Make</FormLabel>
                <FormInput
                  theme={theme}
                  type="text"
                  name="vehicleMake"
                  value={formData.vehicleMake}
                  onChange={handleInputChange}
                  placeholder="Toyota, Honda, BMW, etc."
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel theme={theme}>Vehicle Model</FormLabel>
                <FormInput
                  theme={theme}
                  type="text"
                  name="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={handleInputChange}
                  placeholder="Camry, Accord, 3 Series, etc."
                />
              </FormGroup>
            </FormGrid>
            
            <FormGroup className="full-width">
              <FormLabel theme={theme}>Project Details</FormLabel>
              <FormTextarea
                theme={theme}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please describe your repair needs, insurance claim details, timeline, and any specific requirements..."
              />
            </FormGroup>
            
            <SubmitButton 
              type="submit" 
              theme={theme} 
              $isLoading={isLoading}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div style={{ 
                    width: '1rem', 
                    height: '1rem', 
                    border: '2px solid transparent',
                    borderTop: '2px solid currentColor',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }} />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend />
                  Send Inquiry
                </>
              )}
            </SubmitButton>
            
            {status.message && (
              <StatusMessage className={status.type} theme={theme}>
                {status.type === 'success' ? <FiCheck /> : <FiX />}
                {status.message}
              </StatusMessage>
            )}
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact;