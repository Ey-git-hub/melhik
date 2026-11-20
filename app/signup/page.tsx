"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  User,
  Shield,
  HeartHandshake,
  Check,
  Lock,
  Mail,
} from "lucide-react";
import SiteHeader from "@/app/components/site-header";
import SiteFooter from "@/app/components/site-footer";

export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState<"student" | "parent" | "admin">("student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [extraField, setExtraField] = useState("");
  const [agreed, setAgreed] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the Terms of Service.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push(`/${role}`);
    }, 600);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7ef] text-[#20231f]">
      <SiteHeader />

      <main className="flex flex-1 items-center justify-center px-5 py-14 sm:px-8">
        <div className="w-full max-w-[520px]">
          <div className="rounded-[32px] border border-[#d8dacf] bg-[#fffefa] p-8 shadow-[0_16px_45px_rgba(25,32,22,0.06)] sm:p-10">
            {/* Logo & Headline */}
            <div className="text-center">
              <Link
                href="/"
                className="inline-flex items-baseline text-2xl font-extrabold tracking-[-0.06em] text-[#1a211c]"
              >
                Melhik
              </Link>
              <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-[#1c221e]">
                Create your account
              </h1>
              
            </div>

            {/* Role Selection */}
            <div className="mt-6">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#798173]">
                Select account type:
              </p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setRole("student")}
                  className={`flex flex-col items-center justify-center gap-1 rounded-2xl border p-3 text-center transition-all ${
                    role === "student"
                      ? "border-[#1b221d] bg-[#1b221d] text-white shadow-sm"
                      : "border-[#d8ded0] bg-[#f9faf4] text-[#4f564b] hover:bg-[#eef2e6]"
                  }`}
                >
                  <User className="h-4 w-4" />
                  <span className="text-xs font-bold">Student</span>
                </button>

                <button
                  type="button"
                  onClick={() => setRole("parent")}
                  className={`flex flex-col items-center justify-center gap-1 rounded-2xl border p-3 text-center transition-all ${
                    role === "parent"
                      ? "border-[#1b221d] bg-[#1b221d] text-white shadow-sm"
                      : "border-[#d8ded0] bg-[#f9faf4] text-[#4f564b] hover:bg-[#eef2e6]"
                  }`}
                >
                  <HeartHandshake className="h-4 w-4" />
                  <span className="text-xs font-bold">Parent</span>
                </button>

                <button
                  type="button"
                  onClick={() => setRole("admin")}
                  className={`flex flex-col items-center justify-center gap-1 rounded-2xl border p-3 text-center transition-all ${
                    role === "admin"
                      ? "border-[#1b221d] bg-[#1b221d] text-white shadow-sm"
                      : "border-[#d8ded0] bg-[#f9faf4] text-[#4f564b] hover:bg-[#eef2e6]"
                  }`}
                >
                  <Shield className="h-4 w-4" />
                  <span className="text-xs font-bold">Admin</span>
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-[#353d32]" htmlFor="signup-name">
                  Full name
                </label>
                <input
                  id="signup-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-2xl border border-[#d6dbcd] bg-[#f9faf4] py-3 px-4 text-xs font-medium text-[#202720] outline-none transition-colors focus:border-[#a0b889]"
                  placeholder={
                    role === "student"
                      ? "e.g. Jordan Davis"
                      : role === "parent"
                      ? "e.g. Taylor Davis"
                      : "e.g. Alex Chen"
                  }
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-[#353d32]" htmlFor="signup-email">
                  Email address
                </label>
                <div className="relative mt-1.5">
                  <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#919a8c]" />
                  <input
                    id="signup-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl border border-[#d6dbcd] bg-[#f9faf4] py-3 pl-10 pr-4 text-xs font-medium text-[#202720] outline-none transition-colors focus:border-[#a0b889]"
                    placeholder="name@domain.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold text-[#353d32]" htmlFor="signup-password">
                  Create password
                </label>
                <div className="relative mt-1.5">
                  <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#919a8c]" />
                  <input
                    id="signup-password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-2xl border border-[#d6dbcd] bg-[#f9faf4] py-3 pl-10 pr-4 text-xs font-medium text-[#202720] outline-none transition-colors focus:border-[#a0b889]"
                    placeholder="Minimum 8 characters"
                  />
                </div>
              </div>

              {/* Role specific input */}
              <div>
                <label className="block text-xs font-bold text-[#353d32]" htmlFor="signup-extra">
                  {role === "student"
                    ? "Grade / Year level"
                    : role === "parent"
                    ? "Child's name & grade"
                    : "School / Organization"}
                </label>
                <input
                  id="signup-extra"
                  type="text"
                  value={extraField}
                  onChange={(e) => setExtraField(e.target.value)}
                  className="mt-1.5 w-full rounded-2xl border border-[#d6dbcd] bg-[#f9faf4] py-3 px-4 text-xs font-medium text-[#202720] outline-none transition-colors focus:border-[#a0b889]"
                  placeholder={
                    role === "student"
                      ? "e.g. 10th Grade / Sophomore"
                      : role === "parent"
                      ? "e.g. Jordan Davis, 10th Grade"
                      : "e.g. Melhik Academy"
                  }
                />
              </div>

              {/* Terms check */}
              <div className="flex items-start gap-2 pt-1">
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-[#cbd1c2] text-[#1b221d] accent-[#1b221d]"
                />
                <label htmlFor="terms" className="text-xs leading-snug text-[#62695c]">
                  I agree to the Terms of Service and Privacy Policy.
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#c9f35b] py-3.5 text-xs font-bold text-[#1b221d] shadow-sm transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
              >
                <span>{isLoading ? "Creating account..." : `Join as ${role.toUpperCase()}`}</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#1b221d]" />
              </button>
            </form>

            {/* Back to sign in */}
            <p className="mt-8 text-center text-xs text-[#6e7668]">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-[#1b221d] underline decoration-[#c9f35b] decoration-2">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* <SiteFooter /> */}
    </div>
  );
}

