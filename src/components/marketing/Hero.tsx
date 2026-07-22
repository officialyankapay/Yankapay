"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const Hero = () => {
  const stats = [
    { value: "2.4M+", label: "Active users" },
    { value: "₦180B", label: "Processed / mo" },
    { value: "99.98%", label: "Uptime SLA" },
  ];
  const walletActions = [
    { label: "Send", className: "bg-[#e7f6f4] text-[#0a5f58] hover:bg-[#def1ee] border border-transparent" },
    { label: "Convert", className: "bg-[#e7f6f4] text-[#0a5f58] hover:bg-[#def1ee] border border-transparent" },
    { label: "Pay", className: "bg-[#17ac9e] text-white hover:bg-[#139b8e] border border-transparent" },
  ];

  return (
    <section className="relative w-full hero-gradient">
      <div className="grid w-full grid-cols-1 items-center gap-10 px-5 pb-12 pt-10 sm:px-8 sm:pb-[60px] sm:pt-[70px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:px-32">
        <header className="flex w-full flex-col items-start justify-center gap-[25px]">
          <Badge className="h-auto rounded-[999px] bg-[#e7f6f4] px-3.5 py-2 text-[#0a5f58] hover:bg-[#e7f6f4]">
            <span className="mr-[9px] inline-block h-2 w-2 rounded bg-[#17ac9e]" />
            <span className="[font-family:'Manrope',Helvetica] text-[13px] font-bold leading-none tracking-[0]">
              Now live across 6 African markets
            </span>
          </Badge>
          <div className="flex w-full flex-col items-start">
            <h1 className="max-w-[620px] [font-family:'Space_Grotesk',Helvetica] text-[40px] font-bold leading-[0.98] tracking-[-1.8px] text-[#0e1513] min-[390px]:text-[44px] sm:text-[58px] sm:tracking-[-2.5px] lg:text-[66px] lg:leading-[64.7px]">
              Banking<br />Beyond <span className="text-[#17ac9e]">Borders.</span>
            </h1>
          </div>
          <div className="flex max-w-[490px] w-full flex-col items-start">
            <p className="[font-family:'Manrope',Helvetica] text-[17px] font-normal leading-[29.5px] tracking-[0] text-[#5b6b67] lg:text-[19px]">
              One super app for fiat and stablecoins, AI money intelligence, and
              instant cross-border settlement — engineered for African SMEs,
              merchants and professionals.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-3 pt-1 sm:w-auto sm:grid-cols-2">
            <Link href="/signup" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="h-auto w-full rounded-[14px] border-4 border-[#d3efeb] bg-white px-[26px] py-4 [font-family:'Manrope',Helvetica] text-base font-bold text-black shadow-none hover:bg-white"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/signup" className="w-full sm:w-auto">
              <Button className="h-auto w-full rounded-[14px] bg-[#17ac9e] px-7 py-4 [font-family:'Manrope',Helvetica] text-base font-bold text-white shadow-[0px_14px_30px_-10px_#17ac9e8c] hover:bg-[#139b8e]">
                Get Yanka Pay Free
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap items-start gap-x-[34px] gap-y-5 pt-[18px]">
            {stats.map((stat) => (
              <div key={stat.label} className="inline-flex flex-col items-start self-stretch">
                <div className="[font-family:'Space_Grotesk',Helvetica] text-[28px] font-bold leading-none tracking-[0] text-[#0e1513]">
                  {stat.value}
                </div>
                <div className="pt-1 [font-family:'Manrope',Helvetica] text-[13px] font-semibold leading-none tracking-[0] text-[#93a19d]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </header>
        <div className="flex w-full items-center justify-center lg:min-h-[590px]">
          <Card className="w-full max-w-[290px] rounded-[36px] border-0 bg-[#0e1513] p-2.5 shadow-[0px_50px_90px_-40px_#0e15138c] sm:rounded-[44px] sm:p-3">
            <CardContent className="rounded-[34px] bg-[linear-gradient(142deg,rgba(23,172,158,1)_0%,rgba(10,95,88,1)_100%)] p-0">
              <div className="flex min-h-[566px] flex-col rounded-[34px] px-[22px] pb-[22px] pt-[26px]">
                <div className="[font-family:'Manrope',Helvetica] text-[13px] font-semibold leading-none tracking-[0] text-[#ffffffcc]">
                  Total balance
                </div>
                <div className="pt-[13px] [font-family:'Space_Grotesk',Helvetica] text-[38px] font-bold leading-none tracking-[0] text-white">
                  ₦4,820,500
                </div>
                <Badge className="mt-[14px] h-auto w-fit rounded-[999px] bg-[#ffffff2e] px-2.5 py-[5px] text-white hover:bg-[#ffffff2e]">
                  <span className="[font-family:'Manrope',Helvetica] text-xs font-bold leading-none tracking-[0]">
                    ▲ 12.4% this week
                  </span>
                </Badge>
                <Card className="mt-[20px] rounded-[20px] border-0 bg-white shadow-none">
                  <CardContent className="flex flex-col gap-3 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="[font-family:'Manrope',Helvetica] text-xs font-semibold leading-none tracking-[0] text-[#93a19d]">
                        USDT Wallet
                      </div>
                      <div className="[font-family:'JetBrains_Mono',Helvetica] text-[13px] font-bold leading-none tracking-[0] text-[#0e1513]">
                        1,240.00
                      </div>
                    </div>
                    <Separator className="bg-[#eef3f2]" />
                    <div className="flex items-start justify-center gap-2">
                      {walletActions.map((action) => (
                        <Button
                          key={action.label}
                          variant="ghost"
                          className={`h-auto flex-1 rounded-[10px] px-0 py-[9px] [font-family:'Manrope',Helvetica] text-[11px] font-bold leading-none tracking-[0] ${action.className}`}
                        >
                          {action.label}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <div className="mt-4 flex items-center gap-2.5 rounded-2xl bg-[#ffffff24] p-3.5">
                  <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-white">
                    <span className="[font-family:'Manrope',Helvetica] text-base font-bold leading-none tracking-[0] text-[#17ac9e]">
                      ✦
                    </span>
                  </div>
                  <div className="inline-flex flex-col items-start">
                    <div className="[font-family:'Manrope',Helvetica] text-xs font-bold leading-none tracking-[0] text-white">
                      Yanka AI
                    </div>
                    <div className="pt-1 [font-family:'Manrope',Helvetica] text-[11px] font-normal leading-none tracking-[0] text-[#ffffffb2]">
                      You saved 18% on fees
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
