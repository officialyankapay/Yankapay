"use client";

import React, { useState } from "react";
import { EyeIcon, EyeOffIcon, MailIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const steps = [
  { number: "1", label: "Details", active: true },
  { number: "2", label: "Verify", active: false },
  { number: "3", label: "Fund", active: false },
];

const calculateStrength = (password: string) => {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.match(/[a-z]/) && password.match(/[A-Z]/)) score++;
  if (password.match(/\d/)) score++;
  if (password.match(/[^a-zA-Z0-9]/)) score++;
  return score;
};

export default function SignUpForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const passwordStrength = calculateStrength(password);

  const getStrengthColor = (score: number) => {
    switch (score) {
      case 0:
        return { label: "Enter a password", color: "text-red-500", barColor: "bg-red-500" };
      case 1:
        return { label: "Weak", color: "text-red-500", barColor: "bg-red-500" };
      case 2:
        return { label: "Fair", color: "text-orange-400", barColor: "bg-orange-400" };
      case 3:
        return { label: "Good", color: "text-green-300", barColor: "bg-green-300" };
      case 4:
        return { label: "Strong", color: "text-[#17ac9e]", barColor: "bg-[#17ac9e]" };
      default:
        return { label: "", color: "", barColor: "" };
    }
  };

  const strengthInfo = getStrengthColor(passwordStrength);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!agreed) {
      setError("Please agree to the Terms and Privacy Policy");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const fullName = `${firstName} ${lastName}`.trim();
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, fullName, phone }),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        throw new Error(data.error || "Signup failed");
      }

      setSuccess(true);
      setTimeout(() => router.push("/login"), 2000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex w-full flex-1 items-center justify-center px-6 py-10 sm:px-10">
      <div className="w-full max-w-[420px]">
        <div className="flex flex-col items-start gap-2">
          <header className="flex w-full flex-col items-start">
            <h2 className="mt-[-1.00px] flex items-center self-stretch [font-family:'Space_Grotesk',Helvetica] text-[32px] font-bold leading-[normal] tracking-[-1.00px] text-[#0e1513]">
              Create your account
            </h2>
          </header>
          <p className="mt-[-1.00px] flex items-center self-stretch [font-family:'Manrope',Helvetica] text-[15px] font-normal leading-[normal] tracking-[0] text-[#5b6b67]">
            <span>Already have one? </span>
            <button
              type="button"
              onClick={() => router.push("/login")}
              className="ml-1 [font-family:'Manrope',Helvetica] font-bold text-[#17ac9e]"
            >
              Log in
            </button>
          </p>

          <nav
            aria-label="Account creation steps"
            className="flex w-full items-center gap-2 overflow-x-auto px-0 pb-2 pt-[18px]"
          >
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center gap-2">
                <div className="inline-flex items-center gap-2">
                  <div
                    className={`flex h-[26px] w-[26px] items-center justify-center rounded-[13px] ${
                      step.active ? "bg-[#17ac9e]" : "bg-[#eef3f2]"
                    }`}
                  >
                    <span
                      className={`flex w-fit items-center justify-center text-center [font-family:'Manrope',Helvetica] text-[13px] font-bold leading-[normal] tracking-[0] ${
                        step.active ? "text-white" : "text-[#93a19d]"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>
                  <span
                    className={`mt-[-1.00px] flex w-fit items-center [font-family:'Manrope',Helvetica] text-[13px] leading-[normal] tracking-[0] ${
                      step.active
                        ? "font-bold text-[#0e1513]"
                        : "font-semibold text-[#93a19d]"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="h-0.5 w-8 shrink-0 bg-[#eef3f2] sm:w-[87.75px]" />
                )}
              </div>
            ))}
          </nav>

          <form onSubmit={handleSubmit} className="flex w-full flex-col items-start gap-3.5 px-0 pb-0 pt-[18px]">
            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex flex-1 flex-col items-start gap-[7px]">
                <label className="mt-[-1.00px] flex self-stretch [font-family:'Manrope',Helvetica] text-[13px] font-bold leading-[normal] tracking-[0] text-[#3b4a46]">
                  First name
                </label>
                <Input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  className="h-auto rounded-[13px] border-[#e5ebe9] px-[15px] py-[13px] [font-family:'Manrope',Helvetica] text-[15px] font-normal text-[#0e1513] shadow-none placeholder:text-[#93a19d] focus-visible:ring-0"
                />
              </div>
              <div className="flex flex-1 flex-col items-start gap-[7px]">
                <label className="mt-[-1.00px] flex self-stretch [font-family:'Manrope',Helvetica] text-[13px] font-bold leading-[normal] tracking-[0] text-[#3b4a46]">
                  Last name
                </label>
                <Input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                  className="h-auto rounded-[13px] border-[#e5ebe9] px-[15px] py-[13px] [font-family:'Manrope',Helvetica] text-[15px] font-normal text-[#0e1513] shadow-none placeholder:text-[#93a19d] focus-visible:ring-0"
                />
              </div>
            </div>

            <div className="flex w-full flex-col items-start gap-[7px]">
              <label className="mt-[-1.00px] flex self-stretch [font-family:'Manrope',Helvetica] text-[13px] font-bold leading-[normal] tracking-[0] text-[#3b4a46]">
                Email address
              </label>
              <div className="flex w-full items-center gap-2.5 rounded-[13px] border border-solid border-[#e5ebe9] px-[15px] py-[13px]">
                <MailIcon className="h-[15px] w-[15px] text-[#93a19d]" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-auto border-0 p-0 [font-family:'Manrope',Helvetica] text-[15px] font-normal text-[#0e1513] shadow-none placeholder:text-[#93a19d] focus-visible:ring-0"
                />
              </div>
            </div>

            <div className="flex w-full flex-col items-start gap-[7px]">
              <label className="mt-[-1.00px] flex self-stretch [font-family:'Manrope',Helvetica] text-[13px] font-bold leading-[normal] tracking-[0] text-[#3b4a46]">
                Phone number
              </label>
              <div className="flex w-full items-center gap-2.5 rounded-[13px] border border-solid border-[#e5ebe9] px-[15px] py-[13px]">
                <span className="min-w-[64.91px] [font-family:'Manrope',Helvetica] text-[15px] font-bold leading-[normal] tracking-[0] text-[#0e1513]">
                  🇳🇬 +234
                </span>
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="801 234 5678"
                  className="h-auto border-0 p-0 [font-family:'Manrope',Helvetica] text-[15px] font-normal text-[#0e1513] shadow-none placeholder:text-[#93a19d] focus-visible:ring-0"
                />
              </div>
            </div>

            <div className="flex w-full flex-col items-start gap-[5px]">
              <label className="mt-[-1.00px] flex self-stretch [font-family:'Manrope',Helvetica] text-[13px] font-bold leading-[normal] tracking-[0] text-[#3b4a46]">
                Password
              </label>
              <div className="flex w-full items-center justify-between rounded-[13px] border border-solid border-[#e5ebe9] px-[15px] pb-[13px] pt-[15px]">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="h-auto border-0 p-0 [font-family:'Manrope',Helvetica] text-[15px] font-normal text-[#0e1513] shadow-none placeholder:text-[#93a19d] focus-visible:ring-0"
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="ml-3 inline-flex items-center justify-center text-[#93a19d]"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-[15px] w-[15px]" />
                  ) : (
                    <EyeIcon className="h-[15px] w-[15px]" />
                  )}
                </button>
              </div>
              <div className="flex w-full items-start justify-center gap-1.5 px-0 pb-0 pt-[3px]">
                {[0, 1, 2, 3].map((index) => {
                  const isFilled = index < passwordStrength;
                  let barColor = "bg-[#eef3f2]";
                  if (isFilled) {
                    switch (passwordStrength) {
                      case 1:
                        barColor = "bg-red-500";
                        break;
                      case 2:
                        barColor = "bg-orange-400";
                        break;
                      case 3:
                        barColor = "bg-green-300";
                        break;
                      case 4:
                        barColor = "bg-[#17ac9e]";
                        break;
                      default:
                        barColor = "bg-[#eef3f2]";
                    }
                  }
                  return (
                    <div
                      key={`strength-bar-${index}`}
                      className={`h-[5px] flex-1 rounded-[999px] transition-all duration-300 ${barColor}`}
                    />
                  );
                })}
              </div>
              <p
                className={`mt-[-1.00px] flex self-stretch [font-family:'Manrope',Helvetica] text-xs font-semibold leading-[normal] tracking-[0] transition-colors duration-300 ${strengthInfo.color}`}
              >
                {strengthInfo.label}
              </p>
            </div>

            <div className="flex w-full flex-col items-start px-0 pb-0 pt-0.5">
              <label className="flex w-full items-start gap-[9px]">
                <Checkbox
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked === true)}
                  className="mt-0 h-5 w-5 rounded-md border-[#17ac9e] data-[state=checked]:bg-[#17ac9e] data-[state=checked]:border-[#17ac9e]"
                />
                <span className="[font-family:'Manrope',Helvetica] text-[13px] font-normal leading-[18.2px] tracking-[0] text-[#5b6b67] sm:pr-[43.3px]">
                  I agree to the{" "}
                  <button type="button" className="font-bold text-[#17ac9e]">
                    Terms
                  </button>{" "}
                  and{" "}
                  <button type="button" className="font-bold text-[#17ac9e]">
                    Privacy Policy
                  </button>
                  , including BVN/NIN
                  <br className="hidden sm:block" />
                  verification.
                </span>
              </label>
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}
            {success && <p className="text-sm text-green-600">Account created! Redirecting to login...</p>}

            <div className="flex w-full flex-col items-start px-0 pb-0 pt-1">
              <Button
                type="submit"
                disabled={loading}
                className="h-auto w-full rounded-[13px] bg-[#17ac9e] px-4 py-[15px] [font-family:'Manrope',Helvetica] text-base font-bold text-white shadow-[0px_14px_30px_-12px_#17ac9e99] hover:bg-[#17ac9e]/90 disabled:opacity-50"
              >
                {loading ? "Creating account..." : "Continue to verification"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
