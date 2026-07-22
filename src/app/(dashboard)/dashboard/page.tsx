"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) router.push("/");
    });
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-[#f6f7f7] p-8">
      <div className="mx-auto max-w-4xl rounded-[16px] bg-white p-8 shadow">
        <div className="flex items-center justify-between mb-6">
          <h1 className="[font-family:'Space_Grotesk',Helvetica] text-2xl font-bold text-[#0e1513]">
            Dashboard
          </h1>
          <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white">
            Logout
          </Button>
        </div>
        <p className="[font-family:'Manrope',Helvetica] text-[#5b6b67]">
          Welcome to your protected dashboard! This page is only visible when logged in.
        </p>
      </div>
    </main>
  );
}