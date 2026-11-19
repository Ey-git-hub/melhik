"use client";

import Link from "next/link";
import { ArrowRight, ClipboardCheck } from "lucide-react";

export default function SiteFooter() {

  return (
    <footer className="border-t border-[#d8dacf] bg-[#f1f2e9] text-[#222923]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Col 1: Brand & Philosophy */}
          <div>
            <Link
              href="/"
              className="inline-flex items-baseline text-[26px] font-extrabold tracking-[-0.06em] text-[#1c221e]"
            >
              melhik
              <span className="ml-1 inline-block h-3 w-3 rounded-full bg-[#c9f35b]" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#686f62]">
              Every in-person lesson tracked. Every milestone visible. The monitoring
              platform that keeps students, parents, and tutors accountable.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs font-semibold text-[#878e81]">
              <span className="rounded-full bg-[#e3e6d8] px-3 py-1">Session logs</span>
              <span className="rounded-full bg-[#e3e6d8] px-3 py-1">Progress reports</span>
              <span className="rounded-full bg-[#e3e6d8] px-3 py-1">Full transparency</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#737b6d]">
              Platform
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/#how-it-works" className="text-[#495144] hover:text-[#181d19]">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/#who-is-it-for" className="text-[#495144] hover:text-[#181d19]">
                  Who it&apos;s for
                </Link>
              </li>
              <li>
                <Link href="/#why-melhik" className="text-[#495144] hover:text-[#181d19]">
                  Why Melhik
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-[#495144] hover:text-[#181d19]">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Dedicated Portals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#737b6d]">
              Dashboards
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/student"
                  className="flex items-center gap-1.5 font-medium text-[#495144] hover:text-[#181d19]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2f885e]" />
                  Student Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/parent"
                  className="flex items-center gap-1.5 font-medium text-[#495144] hover:text-[#181d19]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ad612b]" />
                  Parent Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="flex items-center gap-1.5 font-medium text-[#495144] hover:text-[#181d19]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#524497]" />
                  Admin Console
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-[#495144] hover:text-[#181d19]">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-[#495144] hover:text-[#181d19]">
                  Create Free Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Callout Card */}
          <div className="rounded-2xl border border-[#d8dacf] bg-[#fffefa] p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#697263]">
              <ClipboardCheck className="h-4 w-4 text-[#8cbd22]" />
              <span>Start tracking today</span>
            </div>
            <p className="mt-2 text-sm text-[#434b3f]">
              Sign up in 30 seconds. Connect with your tutor and start logging
              every in-person session.
            </p>
            <Link
              href="/signup"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#1b221d] py-2.5 text-xs font-bold text-white transition-transform hover:scale-[1.02]"
            >
              <span>Create your account</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#c9f35b]" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#d8dacf] pt-8 text-xs text-[#7d8477] sm:flex-row">
          <p>© 2026 Melhik. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="cursor-pointer hover:text-[#252c23]">Privacy Policy</span>
            <span className="cursor-pointer hover:text-[#252c23]">Terms of Service</span>
            <span className="cursor-pointer hover:text-[#252c23]">Safety Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
