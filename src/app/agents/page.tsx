"use client";

import { Header } from "@/components/marketing/Header";
import { AgentsHero } from "@/components/agents/Hero";
import { AgentsToolkit } from "@/components/agents/Toolkit";
import { AgentsCallToAction } from "@/components/agents/Calltoaction";
import { Footer } from "@/components/marketing/Footer";

export default function AgentsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <AgentsHero />
        <AgentsToolkit />
        <AgentsCallToAction />
      </main>
      <Footer /> {/* ← Footer is OUTSIDE the main content */}
    </div>
  );
}