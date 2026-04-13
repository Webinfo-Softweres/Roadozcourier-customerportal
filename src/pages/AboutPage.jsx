import React from 'react';
import AboutHero from '../components/AboutHero';
import VisionMission from '../components/VisionMission';
import CompanyStory from '../components/CompanyStory';
import GrowthEngine from '../components/GrowthEngine';
import BrochureSection from '../components/BrochureSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <AboutHero />
      <CompanyStory />
      <VisionMission />
      <GrowthEngine />
      <BrochureSection />
    </div>
  );
};

export default AboutPage;