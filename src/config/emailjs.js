// EmailJS Configuration - Using Environment Variables
export const emailjsConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  privateKey: process.env.REACT_APP_EMAILJS_PRIVATE_KEY
};

// Email template parameters mapping
export const emailTemplateParams = {
  from_name: 'firstName',
  from_lastname: 'lastName', 
  from_email: 'email',
  phone: 'phone',
  service_type: 'service',
  vehicle_make: 'vehicleMake',
  vehicle_model: 'vehicleModel',
  message: 'message',
  to_name: 'Ultimate Motors Team',
  reply_to: 'email'
};
