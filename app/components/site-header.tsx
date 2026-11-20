"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, ChevronDown, Shield, User, HeartHandshake, BookOpen, Moon, Sun } from "lucide-react";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dashboardDropdown, setDashboardDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("melhik-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDarkMode = savedTheme ? savedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDarkMode);
    window.setTimeout(() => setDarkMode(shouldUseDarkMode), 0);
  }, []);

  const toggleDarkMode = () => {
    const nextDarkMode = !darkMode;
    setDarkMode(nextDarkMode);
    document.documentElement.classList.toggle("dark", nextDarkMode);
    window.localStorage.setItem("melhik-theme", nextDarkMode ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#dcded3]/80 bg-[#f7f7ef]/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-[82px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="group flex items-baseline text-[28px] font-extrabold tracking-[-0.06em] text-[#1c221e]"
          >
            <Image
              src="/melhik-logo-mark.png"
              alt=""
              width={358}
              height={422}
              className="mr-2 h-8 w-7 object-contain object-bottom"
            />
            Melhik
          </Link>

          
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
         
          <Link
            href="/#who-is-it-for"
            className="text-sm font-medium text-[#4f564b] transition-colors hover:text-[#181d1a]"
          >
            Who it&apos;s for
          </Link>
          <Link
            href="/#why-melhik"
            className="text-sm font-medium text-[#4f564b] transition-colors hover:text-[#181d1a]"
          >
            Why Melhik
          </Link>

          {/* Quick Dashboards Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDashboardDropdown(!dashboardDropdown)}
              onBlur={() => setTimeout(() => setDashboardDropdown(false), 200)}
              className="flex items-center gap-1.5 text-sm font-semibold text-[#282f2a] hover:text-[#141816]"
            >
              <span>Portals</span>
              <ChevronDown className="h-4 w-4 text-[#757c70]" />
            </button>

            {dashboardDropdown && (
              <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-[#dcdfd2] bg-[#fffefa] p-2 shadow-[0_18px_40px_rgba(25,30,22,0.12)]">
                <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#868d7f]">
                  Dashboards
                </p>
                <Link
                  href="/student"
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-[#282f2a] hover:bg-[#eef2e6]"
                >
                  <User className="h-4 w-4 text-[#3c7e5a]" />
                  <span>Student Dashboard</span>
                </Link>
                <Link
                  href="/parent"
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-[#282f2a] hover:bg-[#eef2e6]"
                >
                  <HeartHandshake className="h-4 w-4 text-[#a35e29]" />
                  <span>Parent Dashboard</span>
                </Link>
                <Link
                  href="/admin"
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-[#282f2a] hover:bg-[#eef2e6]"
                >
                  <Shield className="h-4 w-4 text-[#4b438f]" />
                  <span>Admin Dashboard</span>
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop CTA actions */}
        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-full border border-[#d8dacf] p-2 text-[#4f564b] transition-colors hover:bg-[#eeefe5]"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            href="/login"
            className="text-sm font-semibold text-[#2b332c] transition-colors hover:text-[#121614]"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="group inline-flex items-center gap-2 rounded-full bg-[#1b221d] px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#2e3931] hover:shadow-md"
          >
            <span>Sign up</span>
            <ArrowRight className="h-4 w-4 text-[#c9f35b] transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-xl border border-[#d8dacf] p-2 text-[#242b26] hover:bg-[#eeefe5]"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Link
            href="/signup"
            className="rounded-full bg-[#c9f35b] px-3.5 py-1.5 text-xs font-bold text-[#1b221d]"
          >
            Get Started
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="rounded-xl border border-[#d8dacf] p-2 text-[#242b26] hover:bg-[#eeefe5]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#dcded3] bg-[#fffefa] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="/#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#2a312a]"
            >
              How it works
            </Link>
            <Link
              href="/#who-is-it-for"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#2a312a]"
            >
              Who it&apos;s for
            </Link>
            <Link
              href="/#why-melhik"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#2a312a]"
            >
              Why Melhik
            </Link>

            <div className="my-2 h-px bg-[#e3e7db]" />
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#868d7f]">
              Dashboards
            </p>
            <Link
              href="/student"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-sm font-semibold text-[#276e4c]"
            >
              <User className="h-4 w-4" /> Student Dashboard
            </Link>
            <Link
              href="/parent"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-sm font-semibold text-[#925524]"
            >
              <HeartHandshake className="h-4 w-4" /> Parent Dashboard
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-sm font-semibold text-[#483d89]"
            >
              <Shield className="h-4 w-4" /> Admin Console
            </Link>

            <div className="my-2 h-px bg-[#e3e7db]" />
            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full rounded-full border border-[#cbd1c2] py-2.5 text-center text-sm font-bold text-[#222923]"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full rounded-full bg-[#1b221d] py-2.5 text-center text-sm font-bold text-[#c9f35b]"
              >
                Create Account
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
