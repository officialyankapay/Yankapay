"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const conversation = [
  {
    role: "user",
    content: "How much did I spend on food this month?",
  },
  {
    role: "assistant",
    prefix: "You spent ",
    emphasis: "₦64,200",
    suffix:
      " on food in June — 18% less than May. Most went to groceries (₦41k). Want me to set a ₦50k cap for July?",
  },
  {
    role: "user",
    content: "Can my business qualify for a ₦2M loan?",
  },
  {
    role: "assistant",
    prefix: "Based on your POS velocity, yes — you pre-qualify for up to ",
    emphasis: "₦3.5M",
    suffix: ". Shall I start an application?",
  },
] as const;

export const YankaAiHero = () => {
  return (
    <section className="w-full bg-[radial-gradient(50%_50%_at_0%_0%,rgba(243,251,250,1)_0%,rgba(255,255,255,1)_55%)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
        <div className="flex w-full flex-col items-start self-center">
          <div className="inline-flex items-center rounded-[999px] bg-[#e7f6f4] px-3.5 py-2">
            <span className="[font-family:'Manrope',Helvetica] text-[13px] font-bold leading-none text-[#0a5f58]">
              ✦ Powered by custom LLM rails
            </span>
          </div>
          <h1
            id="yanka-ai-heading"
            className="mt-[23px] [font-family:'Space_Grotesk',Helvetica] text-[42px] font-bold leading-[0.98] tracking-[-1.16px] text-[#0e1513] sm:text-[58px]"
          >
            Your money, in
            <br />
            <span className="text-[#17ac9e]">conversation.</span>
          </h1>
          <p className="mt-[21px] max-w-[480px] [font-family:'Manrope',Helvetica] text-base font-normal leading-[27.9px] text-[#5b6b67] sm:text-lg">
            Ask anything about your finances by text or voice. Yanka AI reads your
            ledgers to answer instantly, advise, and forecast.
          </p>
          <div className="mt-[26px] flex flex-wrap items-start gap-3.5">
            <Button
              type="button"
              className="h-auto rounded-[14px] bg-[#17ac9e] px-7 py-4 [font-family:'Manrope',Helvetica] text-base font-bold text-white shadow-[0px_14px_30px_-10px_#17ac9e8c] hover:bg-[#12998c]"
            >
              Ask Yanka
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-auto rounded-[14px] border-[#d3efeb] bg-transparent px-[26px] py-4 [font-family:'Manrope',Helvetica] text-base font-bold text-[#0a5f58] hover:border-[#b9e5df] hover:bg-[#f3fbfa] hover:text-[#0a5f58]"
            >
              🎙 Try voice
            </Button>
          </div>
        </div>
        <Card className="w-full self-center rounded-3xl border-[#e5ebe9] bg-white p-[22px] shadow-[0px_30px_60px_-34px_#0e151366]">
          <CardContent className="p-0">
            <header className="flex items-center gap-2.5 border-b border-[#eef3f2] pb-3.5">
              <div
                aria-hidden="true"
                className="flex size-[34px] shrink-0 items-center justify-center rounded-[10px] bg-[#17ac9e] [font-family:'Manrope',Helvetica] text-base font-normal text-white"
              >
                ✦
              </div>
              <div className="flex flex-col">
                <h2 className="[font-family:'Manrope',Helvetica] text-sm font-bold leading-normal text-[#0e1513]">
                  Yanka AI
                </h2>
                <p className="[font-family:'Manrope',Helvetica] text-[11px] font-semibold leading-normal text-[#17ac9e]">
                  ● Online · reads your ledger
                </p>
              </div>
            </header>
            <div className="flex flex-col gap-3 pt-4">
              {conversation.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={
                    message.role === "user"
                      ? "flex justify-end"
                      : "flex justify-start"
                  }
                >
                  <p
                    className={
                      message.role === "user"
                        ? "max-w-[461px] rounded-[15px_15px_4px_15px] bg-[#17ac9e] px-[15px] py-[11px] [font-family:'Manrope',Helvetica] text-sm font-normal leading-normal text-white"
                        : "max-w-[489px] rounded-[15px_15px_15px_4px] bg-[#f3f7f6] px-[15px] py-[11px] [font-family:'Manrope',Helvetica] text-sm font-normal leading-[21px] text-[#0e1513]"
                    }
                  >
                    {"content" in message ? (
                      message.content
                    ) : (
                      <>
                        {message.prefix}
                        <strong className="font-bold">{message.emphasis}</strong>
                        {message.suffix}
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
            <form
              className="mt-3 flex items-center gap-2.5 rounded-[14px] bg-[#f3f7f6] px-[15px] py-[11px]"
              onSubmit={(event) => event.preventDefault()}
            >
              <Input
                aria-label="Ask about your money"
                placeholder="Ask about your money…"
                className="h-auto flex-1 border-0 bg-transparent p-0 [font-family:'Manrope',Helvetica] text-sm font-normal text-[#0e1513] shadow-none placeholder:text-[#93a19d] focus-visible:ring-0"
              />
              <Button
                type="submit"
                aria-label="Send message"
                className="h-8 w-8 shrink-0 rounded-[10px] bg-[#17ac9e] p-0 [font-family:'Manrope',Helvetica] text-base font-normal text-white hover:bg-[#12998c]"
              >
                ↑
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};