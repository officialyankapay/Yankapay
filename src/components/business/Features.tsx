"use client";

import {
  Briefcase,
  Users,
  Banknote,
  CreditCard,
  BarChart3,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Briefcase className="h-6 w-6 text-[#17ac9e]" />,
    title: "Multi-account management",
    description:
      "Create sub‑accounts for different teams, projects, or branches.",
  },
  {
    icon: <Users className="h-6 w-6 text-[#17ac9e]" />,
    title: "Payroll & bulk disbursements",
    description: "Pay staff, suppliers, and contractors in one click.",
  },
  {
    icon: <Banknote className="h-6 w-6 text-[#17ac9e]" />,
    title: "Invoice & payment links",
    description: "Generate professional invoices and receive payments fast.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-[#17ac9e]" />,
    title: "Corporate cards",
    description: "Issue virtual or physical cards with spending limits.",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-[#17ac9e]" />,
    title: "Analytics & insights",
    description: "Real‑time cash flow, profit, and expense dashboards.",
  },
  {
    icon: <Shield className="h-6 w-6 text-[#17ac9e]" />,
    title: "Fraud protection",
    description: "AI‑powered monitoring to keep your funds secure.",
  },
];

export const BusinessFeatures = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <h2 className="mb-8 [font-family:'Space_Grotesk',Helvetica] text-2xl md:text-3xl font-bold text-[#0e1513]">
          Tools your business needs
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