"use client";

import SignUpForm from "@/components/auth/SignUpForm";

export default function SignupPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <section className="grid min-h-screen w-full grid-cols-1 md:grid-cols-[61fr_39fr] items-stretch">
        <SignUpForm />
        <aside className="relative hidden min-h-full w-full self-stretch overflow-hidden bg-[linear-gradient(208deg,rgba(23,172,158,1)_0%,rgba(10,95,88,1)_100%)] md:flex">
          <div className="relative flex h-full min-h-[470px] w-full flex-col justify-between overflow-hidden px-5 py-7 sm:px-8 sm:py-9 md:px-10 md:py-10 lg:px-12 lg:py-14">
            <header className="relative z-10 flex w-full justify-end">
              <p className="m-0 [font-family:'Space_Grotesk',Helvetica] text-[20px] font-bold leading-none tracking-[-0.5px] text-white sm:text-[23px]">
                Yanka Pay.
              </p>
            </header>
            <section className="relative z-10 mt-auto flex w-full flex-col items-start">
              <div className="flex w-full max-w-[320px] flex-col items-start gap-8">
                <h2 className="m-0 [font-family:'Space_Grotesk',Helvetica] text-[32px] font-bold leading-[0.95] tracking-[-1.3px] text-white sm:text-[36px] sm:tracking-[-1.4px] md:text-[40px] md:leading-[42px] md:tracking-[-1.5px]">
                  One account. Every
                  <br />
                  currency. Zero borders.
                </h2>
                <ul className="m-0 flex w-full list-none flex-col gap-3.5 p-0 sm:gap-4">
                  {[
                    "USDT + USDC in one wallet",
                    "AI money intelligence from day one",
                    "Instant cross-border settlement",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[9px] bg-[#ffffff24]">
                        <span className="[font-family:'Manrope',Helvetica] text-[15px] font-normal leading-none text-white">
                          ✓
                        </span>
                      </span>
                      <span className="[font-family:'Manrope',Helvetica] text-[13px] font-semibold leading-normal tracking-[0] text-white sm:text-[14px] md:text-[15px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[210px]">
              <div className="absolute -bottom-[120px] -left-40 h-[420px] w-[420px] rounded-full border border-solid border-[#ffffff24]" />
              <div className="absolute -bottom-10 -left-20 h-[300px] w-[300px] rounded-full border border-solid border-[#ffffff1f]" />
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
