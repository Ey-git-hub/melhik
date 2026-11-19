"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Eye,
  EyeOff,
  User,
  Shield,
  HeartHandshake,
  Sparkles,
  Lock,
  Mail,
} from "lucide-react";
import SiteHeader from "@/app/components/site-header";
import SiteFooter from "@/app/components/site-footer";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<"student" | "parent" | "admin">("student");
  const [email, setEmail] = useState("jordan.davis@student.org");
  const [password, setPassword] = useState("••••••••••••");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRoleChange = (newRole: "student" | "parent" | "admin") => {
    setRole(newRole);
    if (newRole === "student") {
      setEmail("jordan.davis@student.org");
    } else if (newRole === "parent") {
      setEmail("taylor.davis@family.org");
    } else {
      setEmail("alex.admin@melhik.edu");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        <div className="w-full max-w-[480px]">
          {/* Card Container */}
          <div className="rounded-[32px] border border-[#d8dacf] bg-[#fffefa] p-8 shadow-[0_16px_45px_rgba(25,32,22,0.06)] sm:p-10">
            {/* Logo & Headline */}
            <div className="text-center">
              <Link
                href="/"
                className="inline-flex items-baseline text-2xl font-extrabold tracking-[-0.06em] text-[#1a211c]"
              >
                unstuck
                <span className="ml-1 inline-block h-2.5 w-2.5 rounded-full bg-[#c9f35b]" />
              </Link>
              <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-[#1c221e]">
                Welcome back
              </h1>
              <p className="mt-1.5 text-xs text-[#6e7568]">
                Sign in to your learning thread or platform workspace.
              </p>
            </div>

            {/* Quick Demo Switcher */}
            <div className="mt-6 rounded-2xl border border-[#dfe3d7] bg-[#f8f9f2] p-1.5">
              <p className="px-2 pt-1 text-[10px] font-bold uppercase tracking-wider text-[#828a7b]">
                Choose portal to sign into:
              </p>
              <div className="mt-1.5 grid grid-cols-3 gap-1">
                <button
                  type="button"
                  onClick={() => handleRoleChange("student")}
                  className={`flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-all ${
                    role === "student"
                      ? "bg-[#1b221d] text-[#c9f35b] shadow-sm"
                      : "text-[#586154] hover:bg-[#eaeedc]"
                  }`}
                >
                  <User className="h-3.5 w-3.5" />
                  <span>Student</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleRoleChange("parent")}
                  className={`flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-all ${
                    role === "parent"
                      ? "bg-[#1b221d] text-[#c9f35b] shadow-sm"
                      : "text-[#586154] hover:bg-[#eaeedc]"
                  }`}
                >
                  <HeartHandshake className="h-3.5 w-3.5" />
                  <span>Parent</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleRoleChange("admin")}
                  className={`flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-all ${
                    role === "admin"
                      ? "bg-[#1b221d] text-[#c9f35b] shadow-sm"
                      : "text-[#586154] hover:bg-[#eaeedc]"
                  }`}
                >
                  <Shield className="h-3.5 w-3.5" />
                  <span>Admin</span>
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-[#353d32]" htmlFor="login-email">
                  Email address
                </label>
                <div className="relative mt-1.5">
                  <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#919a8c]" />
                  <input
                    id="login-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl border border-[#d6dbcd] bg-[#f9faf4] py-3 pl-10 pr-4 text-xs font-medium text-[#202720] outline-none transition-colors focus:border-[#a0b889]"
                    placeholder="you@domain.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-[#353d32]" htmlFor="login-password">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => alert("Password reset link simulated! Check your inbox.")}
                    className="text-[11px] font-semibold text-[#5d6856] hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative mt-1.5">
                  <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#919a8c]" />
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-2xl border border-[#d6dbcd] bg-[#f9faf4] py-3 pl-10 pr-11 text-xs font-medium text-[#202720] outline-none transition-colors focus:border-[#a0b889]"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8b9487] hover:text-[#232b23]"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  id="remember"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-[#cbd1c2] text-[#1b221d] accent-[#1b221d]"
                />
                <label htmlFor="remember" className="text-xs font-medium text-[#646c5e]">
                  Remember this device for 30 days
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#1b221d] py-3.5 text-xs font-bold text-white shadow-sm transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
              >
                <span>{isLoading ? "Signing in..." : `Sign into ${role.toUpperCase()} Workspace`}</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#c9f35b]" />
              </button>
            </form>

            {/* Social Dividers */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#e3e6db]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#939b8e]">
                Or continue with
              </span>
              <div className="h-px flex-1 bg-[#e3e6db]" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => router.push(`/${role}`)}
                className="flex items-center justify-center gap-2 rounded-2xl border border-[#d6dbce] bg-white py-2.5 text-xs font-bold text-[#32392f] hover:bg-[#f4f6ee]"
              >
                <span>Google</span>
              </button>
              <button
                type="button"
                onClick={() => router.push(`/${role}`)}
                className="flex items-center justify-center gap-2 rounded-2xl border border-[#d6dbce] bg-white py-2.5 text-xs font-bold text-[#32392f] hover:bg-[#f4f6ee]"
              >
                <span>Apple</span>
              </button>
            </div>

            {/* Sign up link */}
            <p className="mt-8 text-center text-xs text-[#6e7668]">
              Don&apos;t have an account yet?{" "}
              <Link href="/signup" className="font-bold text-[#1b221d] underline decoration-[#c9f35b] decoration-2">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

