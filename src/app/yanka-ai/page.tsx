"use client";

import { Header } from "@/components/marketing/Header";
import { YankaAiHero } from "@/components/yankaai/Hero";
import { YankaAiCapabilities } from "@/components/yankaai/Capabilities";
import { YankaAiCallToAction } from "@/components/yankaai/CallToAction";
import { Footer } from "@/components/marketing/Footer";

export default function YankaAiPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <YankaAiHero />
        <YankaAiCapabilities />
        <YankaAiCallToAction />
      </main>
      <Footer />
    </div>
  );
}