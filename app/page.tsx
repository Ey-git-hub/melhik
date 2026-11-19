import Link from "next/link";
import { ArrowRight, Check, Sparkles, User, Shield, HeartHandshake } from "lucide-react";
import SiteHeader from "@/app/components/site-header";
import SiteFooter from "@/app/components/site-footer";
import InteractiveHeroDemo from "@/app/components/interactive-hero-demo";
import InteractiveLearningThread from "@/app/components/interactive-learning-thread";
import InteractiveFaq from "@/app/components/interactive-faq";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7ef] text-[#20231f]">
      {/* Top Header */}
      <SiteHeader />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="mx-auto max-w-[1280px] px-5 pb-16 pt-10 sm:px-8 sm:pt-16 lg:px-12 lg:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            {/* Hero Left Content */}
            <div>
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d6dad0] bg-[#eef0e7] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#555d51]">
                <span className="h-2 w-2 rounded-full bg-[#1b221d]" />
                Tutoring that starts with you
              </div>

              {/* Giant Headline */}
              <h1 className="mt-6 text-[clamp(2.75rem,6.2vw,5.1rem)] font-extrabold leading-[0.96] tracking-[-0.065em] text-[#1a211c]">
                A little stuck?
                <br />
                Let&apos;s get you
                <br />
                moving.
              </h1>

              {/* Subtitle */}
              <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-[#686f63] sm:text-xl">
                Not another endless list of tutors. Bring your question, find your kind
                of explanation, and take the next step.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  href="/ask"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#c9f35b] px-7 py-3.5 text-base font-bold text-[#1a211c] shadow-[0_10px_25px_rgba(201,243,91,0.35)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_14px_30px_rgba(201,243,91,0.45)] active:scale-[0.98]"
                >
                  <span>Ask your first question</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#how-it-works"
                  className="text-sm font-bold text-[#444c40] underline decoration-[#c9f35b] decoration-2 underline-offset-8 transition-colors hover:text-[#181d19]"
                >
                  See how it works
                </Link>
              </div>

              <p className="mt-5 text-xs font-medium text-[#858d80]">
                No perfect questions needed. Just a place to start.
              </p>
            </div>

            {/* Hero Right: Interactive Card Demo */}
            <div>
              <InteractiveHeroDemo />
            </div>
          </div>
        </section>

        {/* 2. FROM STUCK TO A STEP FORWARD (3 STEPS) */}
        <section
          id="how-it-works"
          className="border-y border-[#dcded3] bg-[#f2f3ea] py-20 sm:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#788172]">
                Less searching, more understanding.
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-[#1b221d] sm:text-4xl lg:text-5xl">
                From stuck to a step forward.
              </h2>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <div className="rounded-[28px] border border-[#d6dad0] bg-[#fffefa] p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <span className="font-mono text-xl font-black text-[#8b9385]">01</span>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-[#1c231e]">
                  Show us the sticky bit
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#61695c]">
                  Type a question, share your working, or upload the problem. Start
                  exactly where you are—no fancy phrasing required.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-[28px] border border-[#d6dad0] bg-[#fffefa] p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <span className="font-mono text-xl font-black text-[#8b9385]">02</span>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-[#1c231e]">
                  Find your kind of help
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#61695c]">
                  Match by subject and explanation style. Choose a tutor who makes it
                  click for you—whether with visuals, analogies, or worked logic.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-[28px] border border-[#d6dad0] bg-[#fffefa] p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <span className="font-mono text-xl font-black text-[#8b9385]">03</span>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-[#1c231e]">
                  Leave with your next step
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#61695c]">
                  Work it out together, then keep a permanent recap and one small
                  practice task to try yourself without pressure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHATEVER'S ON YOUR MIND (SUBJECT CARDS) */}
        <section id="subjects" className="py-20 sm:py-28">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-[#1b221d] sm:text-4xl">
                  Whatever&apos;s on your mind.
                </h2>
                <p className="mt-2 text-base text-[#6d7568]">
                  Select a subject to begin your question match.
                </p>
              </div>
              <Link
                href="/ask"
                className="group flex items-center gap-2 text-sm font-bold text-[#2a3229] transition-colors hover:text-[#171d18]"
              >
                <span>Explore all subjects</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* 4 Cards Grid from Figma */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Maths */}
              <Link
                href="/ask?subject=Maths"
                className="group flex flex-col justify-between rounded-[26px] border border-[#d7dad0] bg-[#fffefa] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#a3b198] hover:shadow-[0_16px_36px_rgba(40,46,35,0.08)]"
              >
                <div>
                  <span className="font-mono text-3xl font-bold text-[#1f2620]">
                    x²
                  </span>
                  <div className="mt-6 flex items-center justify-between">
                    <h3 className="text-xl font-bold tracking-tight text-[#1e251f]">
                      Maths
                    </h3>
                    <ArrowRight className="h-4 w-4 text-[#757d70] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#181d19]" />
                  </div>
                </div>
                <p className="mt-3 text-xs font-medium text-[#7a8275]">
                  From fractions to functions
                </p>
              </Link>

              {/* Science */}
              <Link
                href="/ask?subject=Science"
                className="group flex flex-col justify-between rounded-[26px] border border-[#d7dad0] bg-[#fffefa] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#a3b198] hover:shadow-[0_16px_36px_rgba(40,46,35,0.08)]"
              >
                <div>
                  <span className="font-mono text-3xl font-bold text-[#1f2620]">
                    H₂O
                  </span>
                  <div className="mt-6 flex items-center justify-between">
                    <h3 className="text-xl font-bold tracking-tight text-[#1e251f]">
                      Science
                    </h3>
                    <ArrowRight className="h-4 w-4 text-[#757d70] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#181d19]" />
                  </div>
                </div>
                <p className="mt-3 text-xs font-medium text-[#7a8275]">
                  Make the why make sense
                </p>
              </Link>

              {/* English */}
              <Link
                href="/ask?subject=English"
                className="group flex flex-col justify-between rounded-[26px] border border-[#d7dad0] bg-[#fffefa] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#a3b198] hover:shadow-[0_16px_36px_rgba(40,46,35,0.08)]"
              >
                <div>
                  <span className="font-serif text-3xl font-bold text-[#1f2620]">
                    Aa
                  </span>
                  <div className="mt-6 flex items-center justify-between">
                    <h3 className="text-xl font-bold tracking-tight text-[#1e251f]">
                      English
                    </h3>
                    <ArrowRight className="h-4 w-4 text-[#757d70] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#181d19]" />
                  </div>
                </div>
                <p className="mt-3 text-xs font-medium text-[#7a8275]">
                  Find your words and your voice
                </p>
              </Link>

              {/* Coding */}
              <Link
                href="/ask?subject=Coding"
                className="group flex flex-col justify-between rounded-[26px] border border-[#d7dad0] bg-[#fffefa] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#a3b198] hover:shadow-[0_16px_36px_rgba(40,46,35,0.08)]"
              >
                <div>
                  <span className="font-mono text-3xl font-bold text-[#1f2620]">
                    &lt;/&gt;
                  </span>
                  <div className="mt-6 flex items-center justify-between">
                    <h3 className="text-xl font-bold tracking-tight text-[#1e251f]">
                      Coding
                    </h3>
                    <ArrowRight className="h-4 w-4 text-[#757d70] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#181d19]" />
                  </div>
                </div>
                <p className="mt-3 text-xs font-medium text-[#7a8275]">
                  Turn errors into understanding
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. DARK FEATURE SHOWCASE: "THE SESSION ENDS. THE LEARNING DOESN'T." */}
        <section
          id="why-unstuck"
          className="bg-[#191f1b] py-24 text-white sm:py-32"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
              {/* Left Side: Mock Learning Thread card */}
              <div>
                <InteractiveLearningThread />
              </div>

              {/* Right Side: Copy & Highlights */}
              <div className="lg:pl-6">
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#c9f35b]">
                  Built for the way you learn
                </span>
                <h2 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
                  The session ends.
                  <br />
                  The learning doesn&apos;t.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-[#a4b1a7] sm:text-lg">
                  No more closing a call and forgetting what clicked. Your question,
                  working, and next step stay together in a learning thread you can
                  come back to whenever you need a refresher.
                </p>

                {/* Checklist with lime checkmarks */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9f35b] text-[#171e19]">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </span>
                    <span className="text-sm font-semibold text-[#ebf3ed]">
                      Shared space, not a one-way lecture
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9f35b] text-[#171e19]">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </span>
                    <span className="text-sm font-semibold text-[#ebf3ed]">
                      A recap in words that make sense to you
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9f35b] text-[#171e19]">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </span>
                    <span className="text-sm font-semibold text-[#ebf3ed]">
                      One small next step. Not more overwhelm.
                    </span>
                  </div>
                </div>

                <div className="mt-10 flex items-center gap-4">
                  <Link
                    href="/student"
                    className="inline-flex items-center gap-2 rounded-full bg-[#c9f35b] px-6 py-3 text-sm font-bold text-[#1a211c] transition-transform hover:scale-105"
                  >
                    <span>View Student Space</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. VIBRANT LIME BANNER FROM FIGMA */}
        <section className="bg-[#c9f35b] py-16 text-[#1a211c] sm:py-20">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h2 className="text-[clamp(2.2rem,4vw,3.6rem)] font-extrabold leading-[1] tracking-[-0.05em]">
                  Good questions start with &ldquo;I don&apos;t get it.&rdquo;
                </h2>
              </div>
              <div className="max-w-md">
                <p className="text-base font-semibold leading-relaxed text-[#2a342c] sm:text-lg">
                  No judgement. No pressure to keep up. Just a real person ready to meet
                  you where you are.
                </p>
                <div className="mt-6">
                  <Link
                    href="/ask"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#1b221d] px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#2e3931] hover:shadow-lg active:scale-95"
                  >
                    <span>Get unstuck today</span>
                    <ArrowRight className="h-4 w-4 text-[#c9f35b] transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. DEDICATED ROLES / PORTALS SHOWCASE */}
        <section className="border-b border-[#dcded3] bg-[#f9faf4] py-20 sm:py-28">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#788172]">
                Customized for every role
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-[#1b221d] sm:text-4xl">
                One platform. Three focused experiences.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-[#687063]">
                Jump straight into the dedicated workspace built for each member of the
                learning community.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {/* Student Portal Card */}
              <div className="flex flex-col justify-between rounded-[28px] border border-[#d6dad0] bg-[#fffefa] p-8 shadow-sm transition-all hover:border-[#7bc89d] hover:shadow-md">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dff7ee] text-[#1f6648]">
                    <User className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-[#1c221e]">
                    Student Portal
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#60685c]">
                    Track active learning threads, practice tricky topics, review worked
                    solutions, and join upcoming 1-on-1 sessions.
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-[#525a4f]">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1f6648]" />
                      Personalized &ldquo;What&apos;s sticky?&rdquo; intake
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1f6648]" />
                      Saved session formula sheets & notes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1f6648]" />
                      Interactive quiz sandbox & streak
                    </li>
                  </ul>
                </div>
                <Link
                  href="/student"
                  className="mt-8 flex items-center justify-between rounded-full bg-[#eaf7f0] px-5 py-2.5 text-xs font-bold text-[#1f6648] transition-colors hover:bg-[#d6f2e3]"
                >
                  <span>Open Student Page</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Parent Portal Card */}
              <div className="flex flex-col justify-between rounded-[28px] border border-[#d6dad0] bg-[#fffefa] p-8 shadow-sm transition-all hover:border-[#e89b65] hover:shadow-md">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0e5] text-[#934415]">
                    <HeartHandshake className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-[#1c221e]">
                    Parent Portal
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#60685c]">
                    Clear visibility into your child&apos;s progress, tutor feedback recaps,
                    attendance schedule, and transparent billing.
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-[#525a4f]">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#934415]" />
                      Child progress breakdown by subject
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#934415]" />
                      Direct tutor notes & messaging
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#934415]" />
                      Spending controls & downloadable receipts
                    </li>
                  </ul>
                </div>
                <Link
                  href="/parent"
                  className="mt-8 flex items-center justify-between rounded-full bg-[#fdf2ea] px-5 py-2.5 text-xs font-bold text-[#934415] transition-colors hover:bg-[#fae4d4]"
                >
                  <span>Open Parent Page</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Admin Console Card */}
              <div className="flex flex-col justify-between rounded-[28px] border border-[#d6dad0] bg-[#fffefa] p-8 shadow-sm transition-all hover:border-[#8f85d6] hover:shadow-md">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eee9ff] text-[#4f3da3]">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-[#1c221e]">
                    Admin Console
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#60685c]">
                    Comprehensive platform governance, user lifecycle management, live
                    session monitoring, and marketplace revenue metrics.
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-[#525a4f]">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#4f3da3]" />
                      User directory & verification controls
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#4f3da3]" />
                      Live session monitoring & safety
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#4f3da3]" />
                      Financial reports & commission payouts
                    </li>
                  </ul>
                </div>
                <Link
                  href="/admin"
                  className="mt-8 flex items-center justify-between rounded-full bg-[#f4f0ff] px-5 py-2.5 text-xs font-bold text-[#4f3da3] transition-colors hover:bg-[#e7e0fd]"
                >
                  <span>Open Admin Page</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ SECTION FROM FIGMA */}
        <section id="faq" className="py-20 sm:py-28">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
              {/* Left Column */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7d8577]">
                  A few things you might be wondering
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-[#1c231e] sm:text-4xl">
                  Questions? Good.
                  <br />
                  We like those.
                </h2>
                <p className="mt-4 text-base text-[#6b7366]">
                  A little clarity before your first question.
                </p>
                <div className="mt-8">
                  <Link
                    href="/ask"
                    className="inline-flex items-center gap-2 rounded-full border border-[#cbd0c2] bg-white px-5 py-2.5 text-xs font-bold text-[#222923] hover:bg-[#f1f3ea]"
                  >
                    <span>Have another question? Ask us</span>
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
      <SiteFooter />
    </div>
  );
}
