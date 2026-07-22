"use client";

const footerColumns = [
  { title: "Product", links: ["Personal", "Business", "Stablecoin", "Yanka AI"] },
  { title: "Company", links: ["About", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Compliance", "Security"] },
];

export const Footer = () => {
  return (
    <footer
      className="relative mt-[60px] w-full bg-[#0e1513]"
      style={{ borderRadius: 0 }}
    >
      <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-11 lg:py-12">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))] lg:gap-[30px]">
          <section className="flex flex-col items-start gap-[15.19px]">
            <header className="flex w-full items-center gap-3">
              <h2 className="flex items-center [font-family:'Space_Grotesk',Helvetica] text-[19px] font-bold leading-[normal] tracking-[0] text-transparent">
                <span className="text-white">Yanka Pay</span>
                <span className="text-[#17ac9e]">.</span>
              </h2>
            </header>
            <p className="max-w-[280px] [font-family:'Manrope',Helvetica] text-sm font-normal leading-[22.4px] tracking-[0] text-[#7c8c88]">
              Banking Beyond Borders. Licensed and
              <br />
              regulated. BVN &amp; NIN verified onboarding.
            </p>
          </section>
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="flex flex-col items-start gap-3.5">
              <h3 className="[font-family:'Manrope',Helvetica] text-sm font-bold leading-[normal] tracking-[0] text-white">
                {column.title}
              </h3>
              <ul className="space-y-0">
                {column.links.map((link) => (
                  <li key={link} className="[font-family:'Manrope',Helvetica] text-sm font-normal leading-7 tracking-[0] text-[#7c8c88]">
                    <button type="button" className="h-auto p-0 text-left text-inherit transition-colors hover:text-white focus:outline-none">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </footer>
  );
};