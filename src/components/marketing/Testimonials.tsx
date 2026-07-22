"use client";

import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      '"Cross-border payouts to my suppliers in Ghana used to take days. On Yanka Pay it\'s instant, and the fees are transparent."',
    name: "Amara Okonkwo",
    role: "Importer · Lagos",
  },
  {
    quote:
      '"The AI told me exactly where my restaurant was leaking margin. We qualified for a ₦2M inventory advance the same week."',
    name: "Peter iyang",
    role: "Entrepreneur · Nigeria",
  },
  {
    quote:
      '"As an agency banker I run 400+ transactions a day. The performance dashboard and commissions view keep me honest."',
    name: "Fatima Bello",
    role: "POS Agent · Kano",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative mt-px flex w-full flex-col items-start gap-[22px] px-5 py-[42px] sm:px-8 lg:px-32 lg:py-[60px]">
      <div className="w-full">
        <header className="flex w-full items-baseline justify-between gap-4 mb-8">
          <h2 className="mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] text-[28px] font-bold leading-[normal] tracking-[-1.00px] text-[#0e1513] sm:text-3xl">
            Trusted by operators across the continent
          </h2>
          <button
            type="button"
            className="shrink-0 [font-family:'Manrope',Helvetica] text-[15px] font-bold leading-[normal] tracking-[0] text-[#17ac9e]"
          >
            user personas
          </button>
        </header>
        <div className="grid w-full grid-cols-1 gap-[18px] md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="rounded-[20px] border border-solid border-[#e5ebe9] bg-[#f6faf9] shadow-none"
            >
              <CardContent className="flex h-full flex-col items-start gap-2.5 p-7">
                <div className="w-full pb-px">
                  <p className="[font-family:'Manrope',Helvetica] text-[22px] font-normal leading-[normal] tracking-[0] text-[#17ac9e]">
                    ★★★★★
                  </p>
                </div>
                <blockquote className="[font-family:'Manrope',Helvetica] text-[15px] font-normal leading-6 tracking-[0] text-[#2a3a36]">
                  {testimonial.quote}
                </blockquote>
                <div className="flex w-full items-center gap-3 pt-2.5">
                  <div
                    aria-hidden="true"
                    className="h-[38px] w-[38px] rounded-full bg-[#d3efeb]"
                  />
                  <div className="flex flex-col items-start">
                    <p className="[font-family:'Manrope',Helvetica] text-sm font-bold leading-[normal] tracking-[0] text-[#0e1513]">
                      {testimonial.name}
                    </p>
                    <p className="[font-family:'Manrope',Helvetica] text-xs font-normal leading-[normal] tracking-[0] text-[#93a19d]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
