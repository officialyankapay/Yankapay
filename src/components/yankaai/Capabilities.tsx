"use client";

import { Card, CardContent } from "@/components/ui/card";

const capabilities = [
  {
    icon: "?",
    title: "Instant queries",
    description: "Multi-currency expense tracking in plain natural language.",
  },
  {
    icon: "◈",
    title: "Personalized advisory",
    description:
      'Custom savings plans — "How can I save ₦50,000 in 3 months?"',
  },
  {
    icon: "◪",
    title: "Business intelligence",
    description:
      "Cash-flow analysis and dynamic margin tracking for merchants.",
  },
  {
    icon: "◔",
    title: "Anomaly alerts",
    description: "Flags out-of-pattern spikes before they become problems.",
  },
  {
    icon: "◈",
    title: "Credit assessment",
    description: "Automated visibility into your loan pre-qualification.",
  },
  {
    icon: "🎙",
    title: "Voice + text",
    description:
      "A conversational drawer that takes both typed and spoken input.",
  },
];

export const YankaAiCapabilities = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <h2 className="mb-8 [font-family:'Space_Grotesk',Helvetica] text-2xl md:text-3xl font-bold text-[#0e1513]">
          What Yanka AI can do
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <Card
              key={capability.title}
              className="rounded-2xl border-[#e5ebe9] bg-white shadow-sm hover:shadow-md transition-shadow p-0"
            >
              <CardContent className="flex h-full flex-col items-start gap-2 p-6">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#e7f6f4]">
                  <span className="flex items-center justify-center text-center [font-family:'Manrope',Helvetica] text-xl font-bold leading-none text-[#17ac9e]">
                    {capability.icon}
                  </span>
                </div>
                <h3 className="pt-2 [font-family:'Space_Grotesk',Helvetica] text-lg font-bold leading-normal text-[#0e1513]">
                  {capability.title}
                </h3>
                <p className="[font-family:'Manrope',Helvetica] text-sm font-normal leading-[21px] text-[#5b6b67]">
                  {capability.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};