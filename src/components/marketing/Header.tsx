"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/shared/MobileMenu";
import type { Session } from "@supabase/supabase-js";

const navigationItems = [
  { label: "Personal", href: "/personal" },
  { label: "Business", href: "/business" },
  { label: "Stablecoin", href: "/stablecoin" },
  { label: "Yanka AI", href: "/yanka-ai" },
  { label: "Agents", href: "/agents" },
];

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => listener?.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#eef3f2] bg-white">
      <div className="flex w-full items-center justify-between px-4 py-3 sm:px-6 lg:px-32 lg:py-[22px]">
        <div className="flex min-w-0 items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <img
              className="h-10 w-[84px] shrink-0 object-contain sm:h-[51px] sm:w-[107px]"
              alt="Yanka Pay"
              src="/yankapay-removebg-preview.png"
            />
            <div className="hidden [font-family:'Space_Grotesk',Helvetica] text-[21px] font-bold leading-none tracking-[-0.50px] text-transparent min-[390px]:block">
              <span className="tracking-[-0.10px] text-[#0e1513]">Yanka Pay</span>
              <span className="tracking-[-0.10px] text-[#17ac9e]">.</span>
            </div>
          </Link>
        </div>

        <div className="hidden items-center gap-8 lg:flex">
          <nav
            aria-label="Primary navigation"
            className="inline-flex items-center gap-8"
          >
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.label} href={item.href}>
                  <Button
                    variant="ghost"
                    className={`h-auto p-0 [font-family:'Manrope',Helvetica] text-[15px] font-semibold leading-normal hover:bg-transparent transition-colors ${
                      isActive ? "text-[#17ac9e]" : "text-[#3b4a46] hover:text-[#0e1513]"
                    }`}
                  >
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* Show Log out if logged in, else Log in */}
            {!loading && (
              session ? (
                <Button
                  onClick={handleLogout}
                  variant="ghost"
                  className="h-auto p-0 [font-family:'Manrope',Helvetica] text-[15px] font-semibold leading-normal text-[#0e1513] hover:bg-transparent hover:text-[#0e1513]"
                >
                  Log out
                </Button>
              ) : (
                <Link href="/login">
                  <Button
                    variant="ghost"
                    className="h-auto p-0 [font-family:'Manrope',Helvetica] text-[15px] font-semibold leading-normal text-[#0e1513] hover:bg-transparent hover:text-[#0e1513]"
                  >
                    Log in
                  </Button>
                </Link>
              )
            )}

            <Link href="/download">
              <Button className="h-auto rounded-xl bg-[#17ac9e] px-[22px] py-3 shadow-[0px_8px_20px_-6px_#17ac9e80] [font-family:'Manrope',Helvetica] text-[15px] font-bold leading-normal text-white hover:bg-[#149b8f]">
                Download App
              </Button>
            </Link>
          </div>
        </div>
        {!loading && (
          <MobileMenu
            authLabel={session ? "Log out" : "Log in"}
            onAuthClick={session ? handleLogout : undefined}
          />
        )}
      </div>
    </header>
  );
};
