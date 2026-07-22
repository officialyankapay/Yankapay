"use client";

import {
  Header,
  Hero,
  StatsCards,
  Testimonials,
  AppDownloadBanner,
  Footer,
} from "@/components/marketing";

export default function Home() {
  return (
    <main className="flex w-full flex-col bg-white">
      <Header />
      <Hero />
      <StatsCards />
      <Testimonials />
      <AppDownloadBanner />
      <Footer />
    </main>
  );
}