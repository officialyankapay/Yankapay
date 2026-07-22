"use client";

import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen w-full bg-[#f6f7f7]">
      <section className="flex min-h-screen w-full overflow-hidden rounded-none border-0 bg-white shadow-none">
        {/* Left Sidebar – Teal Gradient */}
        <aside className="relative hidden w-full max-w-[520px] overflow-hidden bg-[linear-gradient(159deg,rgba(23,172,158,1)_0%,rgba(10,95,88,1)_100%)] lg:flex lg:flex-col lg:px-12 lg:py-8">
          <header className="relative z-10">
            <div className="relative flex items-center w-fit font-['Space_Grotesk'] text-[23px] font-bold leading-normal tracking-[-0.5px] text-white">
              Yanka Pay.
            </div>
          </header>
          <div className="relative z-10 mt-auto flex max-w-[400px] flex-col items-start gap-[17px] pb-10">
            <h1 className="self-stretch font-['Space_Grotesk'] text-[42px] font-bold leading-[44.1px] tracking-[-1.5px] text-white">
              Welcome back to
              <br />
              banking beyond
              <br />
              borders.
            </h1>
            <p className="max-w-[400px] font-['Manrope'] text-base font-normal leading-[24.8px] text-[#ffffffd9]">
              Your fiat, stablecoins and AI money intelligence, all
              <br />
              waiting exactly where you left them.
            </p>
          </div>
          <div className="pointer-events-none absolute -right-40 top-[-120px] h-[420px] w-[420px] rounded-full border border-solid border-[#ffffff24]" />
          <div className="pointer-events-none absolute -right-20 -top-10 h-[300px] w-[300px] rounded-full border border-solid border-[#ffffff1f]" />
        </aside>

        {/* Right Content – Login Form */}
        <div className="flex flex-1 items-center justify-center px-6 py-10 sm:px-10">
          <LoginForm />
        </div>
      </section>
    </main>
  );
}