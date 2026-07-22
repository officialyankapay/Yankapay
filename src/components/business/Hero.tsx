"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export const BusinessHero = () => {
  return (
    <section className="w-full bg-[radial-gradient(50%_50%_at_0%_0%,rgba(243,251,250,1)_0%,rgba(255,255,255,1)_55%)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-10 sm:px-8 md:px-12 md:py-20 lg:grid-cols-2 lg:gap-16">
        {/* Left Column */}
        <header className="flex w-full flex-col items-start justify-center gap-6">
          <div className="inline-flex items-center rounded-full bg-[#e7f6f4] px-3.5 py-2 text-[#0a5f58]">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#17ac9e]" />
            <span className="[font-family:'Manrope',Helvetica] text-[13px] font-bold leading-none tracking-[0]">
              For businesses & merchants
            </span>
          </div>

          <div className="flex w-full flex-col items-start">
            <h1 className="max-w-[620px] [font-family:'Space_Grotesk',Helvetica] text-[40px] font-bold leading-[0.98] tracking-[-1.8px] text-[#0e1513] min-[390px]:text-[44px] sm:text-[58px] sm:tracking-[-2.5px] lg:text-[66px] lg:leading-[64.7px]">
              Business banking <span className="text-[#17ac9e]">that scales</span>.
            </h1>
          </div>

          <div className="flex max-w-[490px] w-full flex-col items-start">
            <p className="[font-family:'Manrope',Helvetica] text-[17px] font-normal leading-[29.5px] tracking-[0] text-[#5b6b67] lg:text-[19px]">
              Accept payments, manage payroll, and access credit – all in one
              platform built for African SMEs and enterprises.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-3 pt-1 sm:w-auto sm:grid-cols-2">
            <Button
              type="button"
              className="h-auto w-full rounded-[14px] bg-[#17ac9e] px-7 py-4 [font-family:'Manrope',Helvetica] text-base font-bold text-white shadow-[0px_14px_30px_-10px_#17ac9e8c] transition-colors hover:bg-[#139b8e]"
            >
              Open business account
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-auto w-full rounded-[14px] border-4 border-[#d3efeb] bg-white px-[26px] py-4 [font-family:'Manrope',Helvetica] text-base font-bold text-black shadow-none transition-colors hover:bg-white"
            >
              Contact sales
            </Button>
          </div>

          <div className="flex flex-wrap items-start gap-x-[34px] gap-y-5 pt-[18px]">
            <div className="inline-flex flex-col items-start self-stretch">
              <div className="[font-family:'Space_Grotesk',Helvetica] text-[28px] font-bold leading-none tracking-[0] text-[#0e1513]">
                50k+
              </div>
              <div className="pt-1 [font-family:'Manrope',Helvetica] text-[13px] font-semibold leading-none tracking-[0] text-[#93a19d]">
                Businesses onboarded
              </div>
            </div>
            <div className="inline-flex flex-col items-start self-stretch">
              <div className="[font-family:'Space_Grotesk',Helvetica] text-[28px] font-bold leading-none tracking-[0] text-[#0e1513]">
                ₦12B
              </div>
              <div className="pt-1 [font-family:'Manrope',Helvetica] text-[13px] font-semibold leading-none tracking-[0] text-[#93a19d]">
                Monthly transaction volume
              </div>
            </div>
            <div className="inline-flex flex-col items-start self-stretch">
              <div className="[font-family:'Space_Grotesk',Helvetica] text-[28px] font-bold leading-none tracking-[0] text-[#0e1513]">
                99.99%
              </div>
              <div className="pt-1 [font-family:'Manrope',Helvetica] text-[13px] font-semibold leading-none tracking-[0] text-[#93a19d]">
                Uptime SLA
              </div>
            </div>
          </div>
        </header>

        {/* Right Column: Image with line at bottom */}
        <div className="flex w-full flex-col items-center justify-center lg:min-h-[400px]">
          <div className="border-b border-[#0e1513]">
            <Image
              src="/Humimg.png"
              alt="Business dashboard preview"
              width={800}
              height={600}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};