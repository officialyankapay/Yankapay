"use client";

import { Card, CardContent } from "@/components/ui/card";

const toolkitItems = [
  {
    icon: "⇵",
    title: "Cash in / cash out",
    description:
      "Process deposits and withdrawals for your customers\ninstantly.",
    iconClassName: "",
  },
  {
    icon: "%",
    title: "Structured commissions",
    description:
      "Transparent, tiered payouts credited automatically per\ntransaction.",
    iconClassName: "",
  },
  {
    icon: "◪",
    title: "Performance tracking",
    description: "Deep analytics on volume, earnings and customer growth.",
    iconClassName: "",
  },
  {
    icon: "📍",
    title: "Agent locator",
    description: "Customers find you on an in-app map of nearby agents.",
    iconClassName: "whitespace-nowrap",
  },
  {
    icon: "▦",
    title: "POS management",
    description: "Manage terminals, floats and settlements from one screen.",
    iconClassName: "",
  },
  {
    icon: "⚡",
    title: "Instant settlement",
    description:
      "Earnings land in your wallet the moment a transaction\nclears.",
    iconClassName: "whitespace-nowrap",
  },
];

export const AgentsToolkit = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <h2 className="mb-8 [font-family:'Space_Grotesk',Helvetica] text-2xl md:text-3xl font-bold text-[#0e1513]">
          The agency toolkit
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {toolkitItems.map((item) => (
            <Card
              key={item.title}
              className="rounded-2xl border-[#e5ebe9] bg-white shadow-sm hover:shadow-md transition-shadow p-0"
            >
              <CardContent className="flex h-full flex-col items-start gap-2 p-6">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#e7f6f4]">
                  <span
                    className={`flex items-center justify-center [font-family:'Manrope',Helvetica] text-xl font-bold leading-none text-[#17ac9e] ${item.iconClassName}`}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                </div>
                <h3 className="pt-2 [font-family:'Space_Grotesk',Helvetica] text-lg font-bold leading-normal text-[#0e1513]">
                  {item.title}
                </h3>
                <p className="whitespace-pre-line [font-family:'Manrope',Helvetica] text-sm font-normal leading-[21px] text-[#5b6b67]">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};