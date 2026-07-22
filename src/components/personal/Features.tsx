"use client";

import {
  Activity,
  CreditCard,
  Monitor,
  Send,
  Target,
  Wallet,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Wallet className="h-6 w-6 text-[#17ac9e]" />,
    title: "Multi-currency wallet",
    description:
      "Hold NGN, USDT, and USDC side-by-side and send ETH in a tap.",
  },
  {
    icon: <Send className="h-6 w-6 text-[#17ac9e]" />,
    title: "Instant transfers",
    description:
      "Send any bank or Yanka user locally and across borders in seconds.",
  },
  {
    icon: <Target className="h-6 w-6 text-[#17ac9e]" />,
    title: "Savings goals",
    description: "Set a goal and let AI auto-allocate to hit them on time.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-[#17ac9e]" />,
    title: "Bills & airtime",
    description: "Pay utilities, data, and subscriptions from one place.",
  },
  {
    icon: <Monitor className="h-6 w-6 text-[#17ac9e]" />,
    title: "Virtual cards",
    description: "Spin up naira and USD cards for online and global spending.",
  },
  {
    icon: <Activity className="h-6 w-6 text-[#17ac9e]" />,
    title: "Health score",
    description:
      "A live financial health score with AI guidance to improve it.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <h2 className="mb-8 [font-family:'Space_Grotesk',Helvetica] text-2xl md:text-3xl font-bold text-[#0e1513]">
          Everything your money needs
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="rounded-2xl border-[#e5ebe9] bg-white shadow-sm hover:shadow-md transition-shadow p-0"
            >
              <CardContent className="flex h-full flex-col items-start gap-2 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e7f6f4]">
                  {feature.icon}
                </div>
                <h3 className="pt-2 [font-family:'Space_Grotesk',Helvetica] text-lg font-bold leading-normal text-[#0e1513]">
                  {feature.title}
                </h3>
                <p className="[font-family:'Manrope',Helvetica] text-sm font-normal leading-[21px] text-[#5b6b67]">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};