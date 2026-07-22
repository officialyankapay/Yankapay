'use client';

import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { HeroSection } from '../../components/personal/HeroSection';
import { FeaturesSection } from '../../components/personal/Features';
import { CTABanner } from '../../components/personal/CTABanner';

export default function PersonalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}