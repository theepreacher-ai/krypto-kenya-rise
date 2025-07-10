
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import EducationHub from '../components/EducationHub';
import TradingPlatform from '../components/TradingPlatform';
import Compliance from '../components/Compliance';
import Community from '../components/Community';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <EducationHub />
      <TradingPlatform />
      <Compliance />
      <Community />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
