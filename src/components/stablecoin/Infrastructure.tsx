"use client";

import {
  ArrowLeftRightIcon,
  CircleDotIcon,
  DiamondIcon,
  ListIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface InfraItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const items: InfraItem[] = [
  {
    title: "Native wallets",
    description: "Hold local fiat, USDT and USDC in one unified balance.",
    icon: CircleDotIcon,
  },
  {
    title: "Instant conversion",
    description: "NGN ↔ stablecoin at real-time market exchange rates.",
    icon: ArrowLeftRightIcon,
  },
  {
    title: "P2P & B2B transfers",
    description: "Move value peer-to-peer or business-to-business across borders.",
    icon: UsersIcon,
  },
  {
    title: "Merchant settlement",
    description: "Accept global payments with direct crypto-settlement rails.",
    icon: DiamondIcon,
  },
  {
    title: "Readable histories",
    description: "Every blockchain transaction in plain, human-readable language.",
    icon: ListIcon,
  },
  {
    title: "Crypto security",
    description: "Dedicated cryptographic verification on every liquidation.",
    icon: ShieldCheckIcon,
  },
];

export const StablecoinInfrastructure = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <h2 className="mb-8 [font-family:'Space_Grotesk',Helvetica] text-2xl md:text-3xl font-bold text-[#0e1513]">
          Stablecoin infrastructure
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="rounded-2xl border-[#e5ebe9] bg-white shadow-sm hover:shadow-md transition-shadow p-0"
              >
                <CardContent className="flex h-full flex-col items-start gap-2 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e7f6f4] text-[#17ac9e]">
                    <Icon aria-hidden="true" className="h-5 w-5 stroke-[2.5]" />
                  </span>
                  <div className="pt-2">
                    <h3 className="[font-family:'Space_Grotesk',Helvetica] text-lg font-bold leading-normal text-[#0e1513]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="[font-family:'Manrope',Helvetica] text-sm font-normal leading-[21px] text-[#5b6b67]">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};