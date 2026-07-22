"use client";

import { BusinessHero } from "@/components/business/Hero";
import { BusinessFeatures } from "@/components/business/Features";
import { BusinessCTABanner } from "@/components/business/CTA";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";

export default function BusinessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <BusinessHero />
        <BusinessFeatures />
        <BusinessCTABanner />
      </main>
      <Footer />
    </div>
  );
}