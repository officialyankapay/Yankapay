"use client";

import { ArrowDownUpIcon, ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const StablecoinHero = () => {
  return (
    <section
      aria-labelledby="stablecoin-hero-title"
      className="w-full bg-[radial-gradient(50%_50%_at_0%_0%,rgba(243,251,250,1)_0%,rgba(255,255,255,1)_55%)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
        <div className="flex w-full flex-col items-start gap-[20.9px] self-center">
          <span className="inline-flex items-center rounded-full bg-[#e7f6f4] px-3.5 py-2 [font-family:'Manrope',Helvetica] text-[13px] font-bold leading-none text-[#0a5f58]">
            Web3, abstracted for everyone
          </span>
          <header className="w-full pt-[3.1px]">
            <h1
              id="stablecoin-hero-title"
              className="[font-family:'Space_Grotesk',Helvetica] text-[40px] font-bold leading-[42px] tracking-[-1.12px] text-[#0e1513] sm:text-[56px] sm:leading-[56px]"
            >
              Cross-border, without the
              <br />
              <span className="text-[#17ac9e]">borders.</span>
            </h1>
          </header>
          <p className="max-w-[480px] pb-[0.77px] [font-family:'Manrope',Helvetica] text-lg font-normal leading-[27.9px] text-[#5b6b67]">
            Convert naira to USDT and USDC at live rates and settle
            <br className="hidden sm:block" /> anywhere in seconds — with
            human-readable histories
            <br className="hidden sm:block" /> and optimized gas fees.
          </p>
          <nav
            aria-label="Stablecoin conversion actions"
            className="flex flex-wrap items-start gap-3.5 pt-[9.11px]"
          >
            <Button
              type="button"
              className="h-auto rounded-[14px] bg-[#17ac9e] px-7 py-4 [font-family:'Manrope',Helvetica] text-base font-bold text-white shadow-[0px_14px_30px_-10px_#17ac9e8c] hover:bg-[#13978b]"
            >
              Start converting
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-auto rounded-[14px] border-[#d3efeb] bg-transparent px-[26px] py-4 [font-family:'Manrope',Helvetica] text-base font-bold text-[#0a5f58] hover:border-[#b9e5df] hover:bg-[#f2fbfa] hover:text-[#0a5f58]"
            >
              View live rates
            </Button>
          </nav>
        </div>

        <Card className="w-full self-center rounded-3xl border-0 bg-[#0e1513] p-[26px] shadow-[0px_30px_60px_-30px_#0e151380]">
          <CardContent className="space-y-0 p-0">
            <p className="pb-[22px] [font-family:'Manrope',Helvetica] text-[13px] font-semibold leading-none text-[#9fb0ac]">
              Convert
            </p>

            {/* You send */}
            <div className="flex items-center justify-between rounded-2xl border border-[#1e2624] bg-[#141b19] p-4">
              <div>
                <p className="[font-family:'Manrope',Helvetica] text-xs font-normal leading-normal text-[#7c8c88]">
                  You send
                </p>
                <p className="[font-family:'JetBrains_Mono',Helvetica] text-2xl font-bold leading-normal text-white">
                  ₦120,000
                </p>
              </div>
              <Button
                type="button"
                variant="ghost"
                aria-label="Select NGN currency"
                className="h-auto rounded-[10px] bg-[#1e2624] px-3.5 py-2 [font-family:'Manrope',Helvetica] text-[13px] font-bold text-white hover:bg-[#28312e] hover:text-white"
              >
                NGN
                <ChevronDownIcon className="ml-1 size-3" aria-hidden="true" />
              </Button>
            </div>

            <div className="-my-2 flex justify-center">
              <Button
                type="button"
                size="icon"
                aria-label="Swap send and receive currencies"
                className="z-10 size-[34px] rounded-[10px] border-[3px] border-[#0e1513] bg-[#17ac9e] text-white hover:bg-[#13978b]"
              >
                <ArrowDownUpIcon className="size-4" aria-hidden="true" />
              </Button>
            </div>

            {/* You receive */}
            <div className="flex items-center justify-between rounded-2xl border border-[#1e2624] bg-[#141b19] p-4">
              <div>
                <p className="[font-family:'Manrope',Helvetica] text-xs font-normal leading-normal text-[#7c8c88]">
                  You receive
                </p>
                <p className="[font-family:'JetBrains_Mono',Helvetica] text-2xl font-bold leading-normal text-[#17ac9e]">
                  72.41 USDT
                </p>
              </div>
              <Button
                type="button"
                variant="ghost"
                aria-label="Select USDT currency"
                className="h-auto rounded-[10px] bg-[#1e2624] px-3.5 py-2 [font-family:'Manrope',Helvetica] text-[13px] font-bold text-white hover:bg-[#28312e] hover:text-white"
              >
                USDT
                <ChevronDownIcon className="ml-1 size-3" aria-hidden="true" />
              </Button>
            </div>

            <dl className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-[22px]">
              <div>
                <dt className="sr-only">Rate</dt>
                <dd className="[font-family:'Manrope',Helvetica] text-xs font-normal leading-normal text-[#7c8c88]">
                  Rate ₦1,657 / USDT
                </dd>
              </div>
              <div>
                <dt className="sr-only">Fee</dt>
                <dd className="[font-family:'Manrope',Helvetica] text-xs font-normal leading-normal text-[#17ac9e]">
                  Gas optimized · ₦0 fee
                </dd>
              </div>
            </dl>

            <Button
              type="button"
              className="h-auto w-full rounded-[13px] bg-[#17ac9e] px-4 py-3.5 [font-family:'Manrope',Helvetica] text-[15px] font-bold text-white hover:bg-[#13978b]"
            >
              Convert now
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};