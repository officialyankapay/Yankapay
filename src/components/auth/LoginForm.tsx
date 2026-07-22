"use client";

import { EyeIcon, EyeOffIcon, MailIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { SOCIAL_PROVIDERS } from "@/config/components";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    // Success! Redirect to dashboard
    router.push("/");
  };

  return (
    <div className="w-full max-w-[400px]">
      <div className="mb-8 flex flex-col items-start gap-2">
        <h2 className="font-['Space_Grotesk'] text-[32px] font-bold text-[#0e1513]">
          Log in
        </h2>
        <p className="font-['Manrope'] text-[15px] text-[#5b6b67]">
          New to Yanka Pay?{" "}
          <Link href="/signup" className="font-bold text-[#17ac9e] hover:underline">
            Create an account
          </Link>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-[7px]">
          <label className="font-['Manrope'] text-[13px] font-bold text-[#3b4a46]">
            Email or phone
          </label>
          <div className="relative">
            <MailIcon className="pointer-events-none absolute left-4 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-[#93a19d]" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-[50px] w-full rounded-[13px] border border-[#e5ebe9] bg-white pl-10 pr-4 text-[#0e1513] placeholder:text-[#93a19d] outline-none focus:ring-2 focus:ring-[#17ac9e]"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-[7px]">
          <div className="flex items-center justify-between">
            <label className="font-['Manrope'] text-[13px] font-bold text-[#3b4a46]">
              Password
            </label>
            <button type="button" className="text-xs font-bold text-[#17ac9e]">
              Forgot?
            </button>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="h-[50px] w-full rounded-[13px] border border-[#e5ebe9] bg-white px-4 pr-11 text-[#0e1513] placeholder:text-[#93a19d] outline-none focus:ring-2 focus:ring-[#17ac9e]"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#93a19d]"
            >
              {showPassword ? <EyeOffIcon className="h-[15px] w-[15px]" /> : <EyeIcon className="h-[15px] w-[15px]" />}
            </button>
          </div>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-[13px] bg-[#17ac9e] py-[15px] font-bold text-white shadow-[0px_14px_30px_-12px_#17ac9e99] hover:bg-[#149a8e] disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Log in"}
        </button>
      </form>

      <div className="flex items-center gap-3.5 pt-[18px]">
        <div className="h-px flex-1 bg-[#eef3f2]" />
        <p className="font-['Manrope'] text-[13px] text-[#93a19d]">or continue with</p>
        <div className="h-px flex-1 bg-[#eef3f2]" />
      </div>

      <div className="grid grid-cols-3 gap-3 pt-[18px]">
        {SOCIAL_PROVIDERS.map((provider) => (
          <button
            key={provider}
            type="button"
            className="rounded-[13px] border border-[#e5ebe9] bg-white py-[13px] text-sm font-bold text-[#3b4a46] hover:bg-[#f8fbfa]"
          >
            {provider}
          </button>
        ))}
      </div>
    </div>
  );
}