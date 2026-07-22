"use client";

import { Button } from "@/components/ui/button";

export const AgentsCallToAction = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-12">
      <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[linear-gradient(168deg,rgba(23,172,158,1)_0%,rgba(10,95,88,1)_100%)] px-8 py-12 sm:flex-row sm:items-center sm:px-12" aria-labelledby="agent-recruitment-heading">
        <div className="flex flex-col items-start gap-2">
          <h2
            id="agent-recruitment-heading"
            className="[font-family:'Space_Grotesk',Helvetica] text-[32px] font-bold leading-normal tracking-[-1px] text-white"
          >
            Turn your shop into a bank branch.
          </h2>
          <p className="[font-family:'Manrope',Helvetica] text-base font-normal leading-normal text-white/85">
            Join 12,000+ Yanka agents earning every day.
          </p>
        </div>
        <Button
          type="button"
          className="h-auto shrink-0 rounded-[14px] bg-white px-[26px] py-4 [font-family:'Manrope',Helvetica] text-[15px] font-bold leading-normal text-[#0a5f58] hover:bg-white/90"
        >
          Become an agent
        </Button>
      </div>
    </section>
  );
};