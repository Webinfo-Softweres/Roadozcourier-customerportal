import React from 'react';
import ContactHero from '../components/ContactHero';
import ContactFormSection from '../components/ContactFormSection';
import ContactMap from '../components/ContactMap';

const ContactPage = () => {
  return (
    <div className="min-h-screen font-sans bg-white">
      <ContactHero />
      <ContactFormSection />
      <ContactMap />
    </div>
  );
};

export default ContactPage;