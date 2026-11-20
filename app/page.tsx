import Link from "next/link";
import {
  ArrowRight,
  Check,
  User,
  Shield,
  HeartHandshake,
  GraduationCap,
  CalendarCheck,
  ClipboardList,
  Eye,
  CheckCircle2,
  Users,
  Award,
  Sparkles,
} from "lucide-react";
import SiteHeader from "@/app/components/site-header";
import SiteFooter from "@/app/components/site-footer";
import SessionTrackerPreview from "@/app/components/session-tracker-preview";
import ActivityFeedPreview from "@/app/components/activity-feed-preview";
import InteractiveFaq from "@/app/components/interactive-faq";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7ef] text-[#20231f]">
      {/* Top Header */}
      <SiteHeader />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="mx-auto max-w-[1280px] px-5 pb-16 pt-10 sm:px-8 sm:pt-4 lg:px-12 lg:pb-24 mt-1">
          <div className="grid items-center gap-11 lg:grid-cols-[1.1fr_1fr]">
            {/* Hero Left Content */}
            <div>
              {/* Eyebrow badge */}
              {/* <div className="inline-flex items-center gap-2 rounded-full border border-[#d6dad0] bg-[#eef0e7] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#555d51]">
                <span className="h-2 w-2 rounded-full bg-[#1b221d]" />
                In-person tutoring, completely tracked
              </div> */}

              {/* Giant Headline */}
              <h1 className="mt-6 text-[clamp(2.75rem,6.2vw,5.1rem)] font-extrabold leading-[0.96] tracking-[-0.065em] text-[#1a211c]">
                Face-to-face.
                <br />
                Every lesson logged.
                <br />
                Full visibility.
              </h1>

              {/* Subtitle */}
              <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-[#686f63] sm:text-xl">
                Tutoring happens in person. Melhik gives students, parents, tutors,
                and administrators one central platform to record sessions, track
                curriculum milestones, and keep everyone accountable.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  href="/signup"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#c9f35b] px-7 py-3.5 text-base font-bold text-[#1a211c] shadow-[0_10px_25px_rgba(201,243,91,0.35)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_14px_30px_rgba(201,243,91,0.45)] active:scale-[0.98]"
                >
                  <span>Join Melhik today</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                
              </div>
            </div>

            {/* Hero Right: Live Session Tracker Preview */}
            <div className="">
              <SessionTrackerPreview />
            </div>
          </div>
        </section>

        {/* 2. HOW IT WORKS: 3 STEPS FOR IN-PERSON MONITORING */}
      

        {/* 3. WHO IS MELHIK FOR? (THE 4 PILLARS) */}
        <section id="who-is-it-for" className="py-20 sm:py-3 mb-7 "  >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                {/* <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#788172]">
                  Built for the full educational ecosystem
                </span> */}
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-[#1b221d] sm:text-4xl">
                  Who Melhik is built for.
                </h2>
                
              </div>
              
            </div>

            {/* 4 Roles Grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Card 1: Students */}
              <div className="group flex flex-col justify-between rounded-[26px] border border-[#d7dad0] bg-[#fffefa] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#a3b198] hover:shadow-[0_16px_36px_rgba(40,46,35,0.08)]">
                <div>
                  {/* <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dff7ee] text-[#1f6648]">
                    <User className="h-6 w-6" />
                  </div> */}
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-[#1e251f]">
                    For Students
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#61695c]">
                    Never lose track of what you learned in person. Access tutor notes,
                    follow-up exercises, and next session reminders in one spot.
                  </p>
                </div>
                <div className="mt-6 border-t border-[#edf0e7] pt-4 text-xs font-bold text-[#1f6648]">
                  Track homework & goals →
                </div>
              </div>

              {/* Card 2: Parents */}
              <div className="group flex flex-col justify-between rounded-[26px] border border-[#d7dad0] bg-[#fffefa] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#e89b65] hover:shadow-[0_16px_36px_rgba(40,46,35,0.08)]">
                <div>
                  {/* <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0e5] text-[#934415]">
                    <HeartHandshake className="h-6 w-6" />
                  </div> */}
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-[#1e251f]">
                    For Parents
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#61695c]">
                    Total transparency into home lessons. View check-in times, verify
                    hours taught, read teacher recaps, and monitor true progress.
                  </p>
                </div>
                <div className="mt-6 border-t border-[#edf0e7] pt-4 text-xs font-bold text-[#934415]">
                  Full visibility & peace of mind →
                </div>
              </div>

              {/* Card 3: Tutors */}
              <div className="group flex flex-col justify-between rounded-[26px] border border-[#d7dad0] bg-[#fffefa] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#9ec96d] hover:shadow-[0_16px_36px_rgba(40,46,35,0.08)]">
                <div>
                  {/* <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f0f9e8] text-[#3d6e19]">
                    <GraduationCap className="h-6 w-6" />
                  </div> */}
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-[#1e251f]">
                    For Tutors
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#61695c]">
                    Professional record-keeping. Log visits in seconds, record curriculum
                    milestones, send structured feedback, and build your verified reputation.
                  </p>
                </div>
                <div className="mt-6 border-t border-[#edf0e7] pt-4 text-xs font-bold text-[#3d6e19]">
                  Streamlined session reporting →
                </div>
              </div>

              {/* Card 4: Admins */}
              <div className="group flex flex-col justify-between rounded-[26px] border border-[#d7dad0] bg-[#fffefa] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#8f85d6] hover:shadow-[0_16px_36px_rgba(40,46,35,0.08)]">
                <div>
                  {/* <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eee9ff] text-[#4f3da3]">
                    <Shield className="h-6 w-6" />
                  </div> */}
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-[#1e251f]">
                    For Administrators
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#61695c]">
                    Centralized program governance. Supervise all in-person matches,
                    audit session logs, ensure safety standards, and track metrics across regions.
                  </p>
                </div>
                <div className="mt-6 border-t border-[#edf0e7] pt-4 text-xs font-bold text-[#4f3da3]">
                  Platform-wide governance →
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. DARK FEATURE SHOWCASE: REAL-TIME IN-PERSON ACTIVITY FEED */}
        <section
          id="why-melhik"
          className="bg-[#191f1b] py-24 text-white sm:py-32"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
              {/* Left Side: Mock Activity Feed preview */}
              <div>
                <ActivityFeedPreview />
              </div>

              {/* Right Side: Copy & Highlights */}
              <div className="lg:pl-6">
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#c9f35b]">
                  Continuous oversight
                </span>
                <h2 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
                  The in-person session ends.
                  <br />
                  The clarity never fades.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-[#a4b1a7] sm:text-lg">
                  No more wondering whether the tutor showed up on time, which algebra
                  formulas were covered, or what homework was assigned. With Melhik,
                  in-person lessons generate permanent, verifiable records for the entire
                  support network.
                </p>

                {/* Checklist with lime checkmarks */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9f35b] text-[#171e19]">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </span>
                    <span className="text-sm font-semibold text-[#ebf3ed]">
                      Verified check-in & check-out time logs for every in-person visit
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9f35b] text-[#171e19]">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </span>
                    <span className="text-sm font-semibold text-[#ebf3ed]">
                      Direct tutor notes sent immediately to parents and students
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9f35b] text-[#171e19]">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </span>
                    <span className="text-sm font-semibold text-[#ebf3ed]">
                      Transparent admin quality checks and credential verification
                    </span>
                  </div>
                </div>

                <div className="mt-10 flex items-center gap-4">
                  <Link
                    href="/signup"
                    className="inline-flex items-center gap-2 rounded-full bg-[#c9f35b] px-6 py-3 text-sm font-bold text-[#1a211c] transition-transform hover:scale-105"
                  >
                    <span>Start monitoring with Melhik</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. VIBRANT LIME BANNER */}
        <section className="bg-[#c9f35b] py-16 text-[#1a211c] sm:py-20">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h2 className="text-[clamp(2.2rem,4vw,3.6rem)] font-extrabold leading-[1] tracking-[-0.05em]">
                  Personal tutoring meets true accountability.
                </h2>
              </div>
              <div className="max-w-md">
                <p className="text-base font-semibold leading-relaxed text-[#2a342c] sm:text-lg">
                  Whether you are a parent seeking transparency, a tutor keeping professional
                  records, or an admin ensuring standards — join Melhik today.
                </p>
                <div className="mt-6">
                  <Link
                    href="/signup"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#1b221d] px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#2e3931] hover:shadow-lg active:scale-95"
                  >
                    <span>Create your account</span>
                    <ArrowRight className="h-4 w-4 text-[#c9f35b] transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. DEDICATED ROLES / PORTALS SHOWCASE */}


        {/* 7. FAQ SECTION */}
        <section id="faq" className="py-20 sm:py-28">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
              {/* Left Column */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7d8577]">
                  Everything you need to know
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-[#1c231e] sm:text-4xl">
                  Questions about
                  <br />
                  in-person tracking?
                </h2>
                <p className="mt-4 text-base text-[#6b7366]">
                  How Melhik bridges real-world tutoring with transparent digital tracking.
                </p>
                <div className="mt-8">
                  <Link
                    href="/signup"
                    className="inline-flex items-center gap-2 rounded-full border border-[#cbd0c2] bg-white px-5 py-2.5 text-xs font-bold text-[#222923] transition-colors hover:bg-[#f1f3ea]"
                  >
                    <span>Get started now</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Interactive Accordion */}
              <div>
                <InteractiveFaq />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* <SiteFooter /> */}
    </div>
  );
}
