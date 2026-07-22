"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigationItems = [
  { label: "Personal", href: "/personal" },
  { label: "Business", href: "/business" },
  { label: "Stablecoin", href: "/stablecoin" },
  { label: "Yanka AI", href: "/yanka-ai" },
  { label: "Agents", href: "/agents" },
];

type MobileMenuProps = {
  authLabel?: string;
  authHref?: string;
  onAuthClick?: () => void | Promise<void>;
};

export function MobileMenu({
  authLabel = "Log in",
  authHref = "/login",
  onAuthClick,
}: MobileMenuProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dce7e4] bg-white text-[#0e1513] transition-colors hover:bg-[#f3f8f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17ac9e] focus-visible:ring-offset-2"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute right-0 top-[calc(100%+12px)] w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-[#dfe9e6] bg-white p-2 shadow-[0_24px_70px_-24px_rgba(14,21,19,0.38)]"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-xl px-4 py-3 [font-family:'Manrope',Helvetica] text-[15px] font-bold transition-colors ${
                    isActive
                      ? "bg-[#e7f6f4] text-[#0a5f58]"
                      : "text-[#3b4a46] hover:bg-[#f3f8f7] hover:text-[#0e1513]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-2 grid grid-cols-2 gap-2 border-t border-[#eef3f2] pt-2">
            {onAuthClick ? (
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  void onAuthClick();
                }}
                className="rounded-xl border border-[#dce7e4] px-3 py-3 [font-family:'Manrope',Helvetica] text-sm font-bold text-[#0e1513]"
              >
                {authLabel}
              </button>
            ) : (
              <Link
                href={authHref}
                onClick={closeMenu}
                className="rounded-xl border border-[#dce7e4] px-3 py-3 text-center [font-family:'Manrope',Helvetica] text-sm font-bold text-[#0e1513]"
              >
                {authLabel}
              </Link>
            )}
            <Link
              href="/download"
              onClick={closeMenu}
              className="rounded-xl bg-[#17ac9e] px-3 py-3 text-center [font-family:'Manrope',Helvetica] text-sm font-bold text-white shadow-[0_8px_20px_-8px_#17ac9e]"
            >
              Download
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
