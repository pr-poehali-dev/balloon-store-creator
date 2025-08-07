import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PlatformTabs from '@/components/PlatformTabs';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <Header />
      <HeroSection />
      <PlatformTabs />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;