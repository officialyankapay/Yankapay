"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const statistics = [
  { value: "₦48k", label: "Avg. monthly earnings" },
  { value: "12k+", label: "Active agents" },
];

const mapMarkers = [
  { position: "top-[34.14%] left-[22.09%]", color: "bg-[#17ac9e]" },
  { position: "top-[55.95%] left-[57.97%]", color: "bg-[#17ac9e]" },
  { position: "top-[26.2%] left-[73.92%]", color: "bg-[#0e1513]" },
  { position: "top-[71.81%] left-[40.03%]", color: "bg-[#17ac9e]" },
];

export const AgentsHero = () => {
  return (
    <section className="w-full bg-[radial-gradient(50%_50%_at_0%_0%,rgba(243,251,250,1)_0%,rgba(255,255,255,1)_55%)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
        <div className="flex flex-col items-start self-center">
          <Badge className="mb-[20.9px] rounded-full border-0 bg-[#e7f6f4] px-3.5 py-2 [font-family:'Manrope',Helvetica] text-[13px] font-bold text-[#0a5f58] hover:bg-[#e7f6f4]">
            Agency banking rails
          </Badge>
          <h1
            id="agency-banking-heading"
            className="mb-[20.9px] pt-[3.1px] [font-family:'Space_Grotesk',Helvetica] text-[42px] font-bold leading-[44px] tracking-[-1.12px] text-[#0e1513] sm:text-[56px] sm:leading-[56px]"
          >
            Grow your agency <span className="text-[#17ac9e]">banking</span>
            <br />
            business.
          </h1>
          <p className="mb-[20.9px] max-w-[480px] pb-[0.78px] [font-family:'Manrope',Helvetica] text-base font-normal leading-[27.9px] text-[#5b6b67] sm:text-lg">
            A full POS toolkit for agents — process cash in and out,
            <br className="hidden sm:block" /> earn structured commissions, track
            performance, and get
            <br className="hidden sm:block" /> found on the in-app map.
          </p>
          <div className="mb-[17.1px] flex flex-wrap items-start gap-3.5 pt-[9.1px]">
            <Button
              type="button"
              className="h-auto rounded-[14px] bg-[#17ac9e] px-7 py-4 [font-family:'Manrope',Helvetica] text-base font-bold text-white shadow-[0px_14px_30px_-10px_#17ac9e8c] hover:bg-[#12978c]"
            >
              Apply as agent
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-auto rounded-[14px] border-[#d3efeb] bg-transparent px-[26px] py-4 [font-family:'Manrope',Helvetica] text-base font-bold text-[#0a5f58] hover:border-[#d3efeb] hover:bg-[#e7f6f4] hover:text-[#0a5f58]"
            >
              Commission rates
            </Button>
          </div>
          <dl className="flex items-start gap-[34px] pt-[17.1px]">
            {statistics.map((statistic) => (
              <div key={statistic.label}>
                <dt className="sr-only">{statistic.label}</dt>
                <dd className="[font-family:'Space_Grotesk',Helvetica] text-[26px] font-bold leading-none text-[#0e1513]">
                  {statistic.value}
                </dd>
                <p className="mt-1 [font-family:'Manrope',Helvetica] text-[13px] font-semibold leading-none text-[#93a19d]">
                  {statistic.label}
                </p>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-col items-start self-center gap-3.5">
          <Card className="relative h-[230px] w-full overflow-hidden rounded-[22px] border-[#e5ebe9] bg-[#eaf1ef] shadow-none">
            <CardContent className="relative h-full p-0">
              <div className="absolute inset-px bg-[linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_17%,rgba(220,230,227,1)_17%,rgba(220,230,227,1)_17%),linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_6%,rgba(220,230,227,1)_6%,rgba(220,230,227,1)_6%)]" />
              {mapMarkers.map((marker, index) => (
                <span
                  key={`${marker.position}-${index}`}
                  aria-hidden="true"
                  className={`absolute h-[6.96%] w-[2.57%] rounded-lg border-[3px] border-white ${marker.color} ${marker.position} shadow-[0px_3px_8px_#00000033]`}
                />
              ))}
              <div className="absolute bottom-[18px] left-[17px] rounded-[11px] bg-white px-[13px] py-[9px] shadow-[0px_4px_12px_#0000001a]">
                <p className="[font-family:'Manrope',Helvetica] text-xs font-bold leading-none text-[#0e1513]">
                  📍 4 agents nearby
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full rounded-[18px] border-0 bg-[#0e1513] shadow-none">
            <CardContent className="flex items-center justify-between p-[18px]">
              <div>
                <p className="[font-family:'Manrope',Helvetica] text-xs font-semibold leading-none text-[#9fb0ac]">
                  This week&apos;s commission
                </p>
                <p className="mt-1 [font-family:'Space_Grotesk',Helvetica] text-[26px] font-bold leading-none text-white">
                  ₦18,420
                </p>
              </div>
              <div className="text-right">
                <p className="[font-family:'Manrope',Helvetica] text-[13px] font-bold leading-none text-[#17ac9e]">
                  ▲ 22%
                </p>
                <p className="mt-1 [font-family:'Manrope',Helvetica] text-xs font-normal leading-none text-[#7c8c88]">
                  412 txns
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};