"use client";

import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="w-full bg-[radial-gradient(50%_50%_at_0%_0%,rgba(243,251,250,1)_0%,rgba(255,255,255,1)_55%)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
        {/* Left Column */}
        <header className="flex w-full flex-col items-start justify-center gap-6">
          <div className="inline-flex items-center rounded-full bg-[#e7f6f4] px-3.5 py-2 text-[#0a5f58]">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#17ac9e]" />
            <span className="[font-family:'Manrope',Helvetica] text-[13px] font-bold leading-none tracking-[0]">
              For individuals & professionals
            </span>
          </div>

          <div className="flex w-full flex-col items-start">
            <h1 className="max-w-[620px] [font-family:'Space_Grotesk',Helvetica] text-[42px] font-bold leading-[0.98] tracking-[-1.16px] text-[#0e1513] sm:text-[58px]">
              Money that <span className="text-[#17ac9e]">moves with you</span>.
            </h1>
          </div>

          <div className="flex max-w-[490px] w-full flex-col items-start">
            <p className="[font-family:'Manrope',Helvetica] text-[17px] font-normal leading-[29.5px] tracking-[0] text-[#5b6b67] lg:text-[19px]">
              Hold naira and stablecoins in one account, send money across
              borders in seconds, and let Yanka AI keep your goals on track.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-3 pt-1 sm:w-auto sm:grid-cols-2">
            <Button
              type="button"
              className="h-auto w-full rounded-[14px] bg-[#17ac9e] px-7 py-4 [font-family:'Manrope',Helvetica] text-base font-bold text-white shadow-[0px_14px_30px_-10px_#17ac9e8c] transition-colors hover:bg-[#139b8e]"
            >
              Open free account
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-auto w-full rounded-[14px] border-4 border-[#d3efeb] bg-white px-[26px] py-4 [font-family:'Manrope',Helvetica] text-base font-bold text-black shadow-none transition-colors hover:bg-white"
            >
              See features
            </Button>
          </div>

          <div className="flex flex-wrap items-start gap-x-[34px] gap-y-5 pt-[18px]">
            <div className="inline-flex flex-col items-start self-stretch">
              <div className="[font-family:'Space_Grotesk',Helvetica] text-[28px] font-bold leading-none tracking-[0] text-[#0e1513]">
                2.4M+
              </div>
              <div className="pt-1 [font-family:'Manrope',Helvetica] text-[13px] font-semibold leading-none tracking-[0] text-[#93a19d]">
                Active users
              </div>
            </div>
            <div className="inline-flex flex-col items-start self-stretch">
              <div className="[font-family:'Space_Grotesk',Helvetica] text-[28px] font-bold leading-none tracking-[0] text-[#0e1513]">
                ₦180B
              </div>
              <div className="pt-1 [font-family:'Manrope',Helvetica] text-[13px] font-semibold leading-none tracking-[0] text-[#93a19d]">
                Processed / mo
              </div>
            </div>
            <div className="inline-flex flex-col items-start self-stretch">
              <div className="[font-family:'Space_Grotesk',Helvetica] text-[28px] font-bold leading-none tracking-[0] text-[#0e1513]">
                99.98%
              </div>
              <div className="pt-1 [font-family:'Manrope',Helvetica] text-[13px] font-semibold leading-none tracking-[0] text-[#93a19d]">
                Uptime SLA
              </div>
            </div>
          </div>
        </header>

        {/* Right Column – no extra min-height, just like Yanka AI */}
        <div className="flex w-full items-center justify-center">
          <div className="relative flex aspect-[4/3] w-full items-center justify-center rounded-[28px] bg-[#e6f2f2] p-5 shadow-[0px_50px_90px_-40px_#0e15138c] sm:rounded-[44px] sm:p-8">
            <div className="text-gray-400 text-center text-sm font-medium [font-family:'Manrope',Helvetica]">
              [ In progress – personal app screenshot ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};