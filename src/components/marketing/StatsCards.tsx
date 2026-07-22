"use client";

import { Card, CardContent } from "@/components/ui/card";

const statsCards = [
  {
    icon: "✦",
    title: "Yanka AI",
    description: [
      "Ask your money anything. Track spend,",
      "forecast cashflow and pre-qualify loans in",
      "plain language.",
    ],
    cardClassName: "bg-white border-[#e5ebe9]",
    iconWrapperClassName: "bg-[#e7f6f4]",
    iconClassName: "[font-family:'Manrope',Helvetica] font-bold text-xl text-[#17ac9e]",
    titleClassName: "[font-family:'Space_Grotesk',Helvetica] font-bold text-[19px] text-[#0e1513]",
    descriptionClassName: "[font-family:'Manrope',Helvetica] font-normal text-sm leading-[21px] text-[#5b6b67]",
  },
  {
    icon: "⇄",
    title: "Stablecoin Rails",
    description: [
      "Hold NGN, USDT & USDC. Convert at live",
      "rates and settle cross-border in seconds.",
    ],
    cardClassName: "bg-white border-[#e5ebe9]",
    iconWrapperClassName: "bg-[#e7f6f4]",
    iconClassName: "[font-family:'Manrope',Helvetica] font-normal text-xl text-[#17ac9e]",
    titleClassName: "[font-family:'Space_Grotesk',Helvetica] font-bold text-[19px] text-[#0e1513]",
    descriptionClassName: "[font-family:'Manrope',Helvetica] font-normal text-sm leading-[21px] text-[#5b6b67]",
  },
  {
    icon: "◈",
    title: "Commercial Loans",
    description: [
      "Collateral-free credit underwritten on",
      "your real POS velocity and invoice volume.",
    ],
    cardClassName: "bg-white border-[#e5ebe9]",
    iconWrapperClassName: "bg-[#e7f6f4]",
    iconClassName: "[font-family:'Manrope',Helvetica] font-bold text-xl text-[#17ac9e]",
    titleClassName: "[font-family:'Space_Grotesk',Helvetica] font-bold text-[19px] text-[#0e1513]",
    descriptionClassName: "[font-family:'Manrope',Helvetica] font-normal text-sm leading-[21px] text-[#5b6b67]",
  },
  {
    icon: "◉",
    title: "Agency Banking",
    description: [
      "POS agent tooling with commissions,",
      "performance tracking and an in-app",
      "agent locator.",
    ],
    cardClassName: "bg-[#0e1513] border-[#e5ebe9]",
    iconWrapperClassName: "bg-[#17ac9e33]",
    iconClassName: "[font-family:'Manrope',Helvetica] font-bold text-xl text-[#17ac9e]",
    titleClassName: "[font-family:'Space_Grotesk',Helvetica] font-bold text-[19px] text-white",
    descriptionClassName: "[font-family:'Manrope',Helvetica] font-normal text-sm leading-[21px] text-[#9fb0ac]",
  },
];

export const StatsCards = () => {
  return (
    <section aria-label="Product highlights" className="w-full px-5 sm:px-8 lg:px-32">
      <div className="grid w-full grid-cols-1 gap-[18px] pt-5 pb-0 md:grid-cols-2 xl:grid-cols-4">
        {statsCards.map((card) => (
          <Card key={card.title} className={`rounded-[20px] border shadow-none ${card.cardClassName}`}>
            <CardContent className="flex h-full flex-col items-start gap-2 p-[26px]">
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.iconWrapperClassName}`} aria-hidden="true">
                <span className={`flex w-fit items-center justify-center text-center leading-none tracking-[0] ${card.iconClassName}`}>
                  {card.icon}
                </span>
              </div>
              <header className="w-full pt-2.5">
                <h3 className={`mt-[-1px] flex items-center tracking-[0] leading-[normal] ${card.titleClassName}`}>
                  {card.title}
                </h3>
              </header>
              <p className={`mt-[-1px] tracking-[0] ${card.descriptionClassName}`}>
                {card.description.map((line, index) => (
                  <span key={`${card.title}-line-${index}`}>
                    {line}
                    {index < card.description.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
