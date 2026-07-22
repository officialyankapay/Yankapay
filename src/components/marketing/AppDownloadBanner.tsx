"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const storeButtons = [
  { label: "App Store", variant: "light" },
  { label: "Google Play", variant: "dark" },
] as const;

export const AppDownloadBanner = () => {
  return (
    <section className="w-full px-5 sm:px-8 lg:px-32">
      <div className="w-full">
        <Card className="w-full overflow-hidden rounded-[16px] border-0 bg-[linear-gradient(167deg,rgba(23,172,158,1)_0%,rgba(10,95,88,1)_100%)] shadow-none">
          <CardContent className="flex min-h-[96px] w-full flex-col gap-6 px-[26px] py-[18px] sm:min-h-[110px] sm:px-[28px] sm:py-[20px] lg:min-h-[98px] lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-[28px] lg:py-[18px]">
            <header className="flex max-w-[640px] flex-col items-start gap-[6px]">
              <h2 className="[font-family:'Space_Grotesk',Helvetica] text-[22px] font-bold leading-none tracking-[-0.8px] text-white sm:text-[26px] lg:text-[19px]">
                Your bank, beyond borders.
              </h2>
              <p className="[font-family:'Manrope',Helvetica] text-[13px] font-normal leading-[1.35] tracking-[0] text-[#ffffffd9] sm:text-[14px] lg:text-[12px]">
                Download Yanka Pay and open a multi-currency account in under 3 minutes.
              </p>
            </header>
            <nav aria-label="Download options" className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {storeButtons.map((button) => (
                <Button
                  key={button.label}
                  type="button"
                  className={
                    button.variant === "light"
                      ? "h-auto rounded-[10px] border border-white bg-white px-4 py-2 [font-family:'Manrope',Helvetica] text-[11px] font-bold leading-none tracking-[0] text-[#0a5f58] shadow-none hover:bg-white/95"
                      : "h-auto rounded-[10px] border border-[#ffffff66] bg-[#ffffff26] px-4 py-2 [font-family:'Manrope',Helvetica] text-[11px] font-bold leading-none tracking-[0] text-white shadow-none hover:bg-[#ffffff30]"
                  }
                >
                  {button.label}
                </Button>
              ))}
            </nav>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
