"use client";

import { Header } from "@/components/marketing/Header";
import { StablecoinHero } from "@/components/stablecoin/Hero";
import { StablecoinInfrastructure } from "@/components/stablecoin/Infrastructure";
import { StablecoinCallToAction } from "@/components/stablecoin/CallToAction";
import { Footer } from "@/components/marketing/Footer";

export default function StablecoinPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <StablecoinHero />
        <StablecoinInfrastructure />
        <StablecoinCallToAction />
      </main>
      <Footer />
    </div>
  );
}